const fs = require('fs');
const path = require('path');

const shopsFilePath = path.join(__dirname, '..', 'data', 'shops.ts');
const content = fs.readFileSync(shopsFilePath, 'utf8');

const rawData = `77 Rue Crozatier
75012
01 40 19 00 33
2 Rue Fernand Labori
75018
01 42 57 42 99
1 Rue du général Lanrezac
75017
09 89 29 52 91`; // Just sample for now

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
    const slugAddress = address.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    return `hey-${slugAddress}-${zip}`;
}

console.log("--- Generated Slugs ---");
entries.forEach(e => {
    console.log(`"${generateSlug(e.address, e.zip)}" for ${e.address}`);
});

console.log("\n--- File Slugs (Head) ---");
const fileSlugs = content.match(/slug: "hey-[^"]*"/g) || [];
fileSlugs.slice(0, 10).forEach(s => console.log(s));
