const fs = require('fs');
const path = require('path');

const shopsFilePath = path.join(__dirname, '..', 'data', 'shops.ts');
let content = fs.readFileSync(shopsFilePath, 'utf8');

const rawData = `77 Rue Crozatier
75012
01 40 19 00 33
2 Rue Fernand Labori
75018
01 42 57 42 99
123 Rue Falguière
75015
01 42 79 80 02
124 Rue du Cherche-midi
75006
01 42 89 23 35
24 Rue Monge
75005
01 43 26 08 70
10 Rue de Pontoise
75005
01 43 26 70 57
153 Rue Saint-Jacques
75005
01 43 54 63 08
146 Rue du Faubourg St Antoine
75011
01 43 95 89 71
202 Rue de Vaugirard
75015
01 45 66 95 81
53 Boulevard Blanqui
75013
01 45 71 14 21
73 Boulevard Vincent Auriol
75013
01 45 85 79 92
67 Rue Saint-Louis en l'Île
75004
01 46 34 70 80
35 Rue Georges Pitard
75015
01 58 05 20 92
107 Rue de Charenton
75012
01 73 71 21 95
13 Rue de la Roquette
75004
01 77 12 54 80
3 Rue des Écoles
75005
06 58 33 62 50
94 Avenue Philippe Auguste
75011
06 73 24 46 51
5 Rue René Boulanger
75010
06 95 13 12 90
121 Rue de Charenton
75012
07 45 25 69 83
97 Rue de Bagnolet
75020
07 58 12 32 57
35 Rue Claude Bernard
75005
09 50 87 85 49
57 Rue Saint-Jacques
75005
09 52 38 05 60
5 Bd de Magenta
75010
09 81 86 42 50
74 Rue du Bac
75007
09 82 36 71 07
243 Rue de Bercy
75012
09 82 53 20 78
51 Rue de l’Échiquier
75010
09 83 58 52 58
73 Rue de Charenton
75012
09 84 03 78 59
1 Rue du Général Lanrezac
75017
09 84 24 52 91
24 Avenue Ledru Rollin
75012
09 86 12 48 81
1 Rue du général Lanrezac
75017
09 89 29 52 91`;

const entries = [];
const lines = rawData.split('\n');
for (let i = 0; i < lines.length; i += 3) {
    if (i + 2 < lines.length) {
        entries.push({
            address: lines[i].trim(),
            zip: lines[i + 1].trim(),
            phone: lines[i + 2].trim()
        });
    }
}

function generateSlug(address, zip) {
    // Note: Use the exact same slug generation logic as before
    // address.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
    // HOWEVER, there's a nuance. "général" -> "g-n-ral" or "general"?
    // The previous script used: `address.toLowerCase().replace(/[^a-z0-9]+/g, '-')...`
    // "é" is NOT a-z0-9. So "général" becomes "g-n-ral".
    // I should check if the file has "g-n-ral" or "general".
    // The previous script logic was:
    // `const slugAddress = address.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');`

    // Let's verify what is in the file.
    // I view_file showed: `hey-77-rue-crozatier-75012`.
    // "77 Rue Crozatier" -> "77-rue-crozatier". Correct.

    // "1 Rue du Général Lanrezac"
    // `1 rue du g n ral lanrezac` -> `1-rue-du-g-n-ral-lanrezac`
    // Wait, regex `[^a-z0-9]+` replaces NON-alphanumeric with `-`.
    // `é` is non-alphanumeric.
    // So `général` -> `g` + `-` + `n` + `-` + `ral`.
    // Unless nodejs environment treats unicode differently? No, standard ASCII regex range.

    const slugAddress = address.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    return `hey-${slugAddress}-${zip}`;
}

const updateMap = new Map();
entries.forEach(entry => {
    const s = generateSlug(entry.address, entry.zip);
    updateMap.set(s, entry);
    // Also try normalization just in case? 
    // If I used a different generator before for accents. 
    // But `add_real_shops.js` was explicit.
});

console.log(`Prepared updates for ${updateMap.size} shops.`);

const fileLines = content.split('\n');
const outputLines = [];

let currentSlug = null;
let insideShop = false;
let skipMode = false;

for (let i = 0; i < fileLines.length; i++) {
    const line = fileLines[i];

    // Detect slug
    const slugMatch = line.match(/slug: "(.*?)",/);
    if (slugMatch) {
        currentSlug = slugMatch[1];
        // console.log("Found slug:", currentSlug);
    }

    if (line.includes('contact: {')) {
        // If this contact block belongs to a shop we want to update
        if (currentSlug && updateMap.has(currentSlug)) {
            console.log(`Updating contact for ${currentSlug}`);
            const data = updateMap.get(currentSlug);
            const fullAddress = `${data.address}, ${data.zip} Paris`;
            const phoneE164 = data.phone.replace(/[^0-9]/g, '');

            outputLines.push(line); // `        contact: {`
            outputLines.push(`            phoneE164: "${phoneE164}",`);
            outputLines.push(`            phoneDisplay: "${data.phone}",`);
            outputLines.push(`            address: "${fullAddress}",`);

            // Enter skip mode to ignore existing contact content
            skipMode = true;
            continue;
        }
    }

    if (skipMode) {
        if (line.trim() === '},' || line.trim() === '}') {
            skipMode = false;
            outputLines.push(line); // Close the block
        }
        // Else skip
        continue;
    }

    // Start/End shop reset
    if (line.trim().startsWith('},') || (line.trim() === '}' && fileLines[i + 1]?.trim().startsWith(']'))) {
        currentSlug = null;
    }

    outputLines.push(line);
}

fs.writeFileSync(shopsFilePath, outputLines.join('\n'), 'utf8');
console.log('Finished update v2.');
