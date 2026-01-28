const fs = require('fs');
const path = require('path');

const shopsFilePath = path.join(__dirname, '..', 'data', 'shops.ts');
let content = fs.readFileSync(shopsFilePath, 'utf8');

// 1. Remove existing "Hey" shops
// We iterate carefully.
const lines = content.split('\n');
const newLines = [];
let insideShop = false;
let isHeyShop = false;
let currentShopBuffer = [];

for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Start of shop object?
    // Heuristic: line with just `{` or `    {` inside the SHOPS array.
    if (line.trim() === '{') {
        insideShop = true;
        currentShopBuffer = [line];
        isHeyShop = false;
        continue;
    }

    if (insideShop) {
        currentShopBuffer.push(line);
        if (line.includes('name: "Hey"')) {
            isHeyShop = true;
        }

        // End of shop object?
        const isEnd = line.trim().startsWith('},') || (line.trim() === '}' && lines[i + 1]?.trim().startsWith(']'));

        if (isEnd) {
            insideShop = false;
            // If it's NOT a Hey shop, we keep it.
            if (!isHeyShop) {
                newLines.push(...currentShopBuffer);
            }
            // If it IS a Hey shop, we discard it (don't push to newLines).
        }
    } else {
        newLines.push(line);
    }
}

// 2. Generate new Hey shops
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

const rawLines = rawData.split('\n');
const newShops = [];
const seenSlugs = new Set();

for (let i = 0; i < rawLines.length; i += 3) {
    if (i + 2 < rawLines.length) {
        const address = rawLines[i].trim();
        const zipcode = rawLines[i + 1].trim();
        const phone = rawLines[i + 2].trim();

        const districtCode = zipcode.substring(3);
        const districtLabel = `PARIS ${districtCode}`;

        // Slug generation
        let slugAddress = address.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
        let slug = `hey-${slugAddress}-${zipcode}`;

        // Handle duplicate slugs (e.g. Lanrezac)
        if (seenSlugs.has(slug)) {
            // Append explicit number or variant?
            // User put duplicated entries... assume they are different shops? at same address? or duplicate in list?
            // "1 Rue du Général Lanrezac" vs "1 Rue du général Lanrezac"
            // Same place. Likely user mistake.
            // I will skip the duplicate to be safe.
            continue;
        }
        seenSlugs.add(slug);

        const fullAddress = `${address}, ${zipcode} Paris`;
        const phoneE164 = phone.replace(/[^0-9]/g, '');

        const shopObj = `    {
        slug: "${slug}",
        name: "Hey",
        districtLabel: "${districtLabel}",
        statusLabel: "OUVERT",
        hoursLabel: "10:00 — 02:00",
        timezone: "Europe/Paris",
        hours: {
            mon: [["10:00", "02:00"]],
            tue: [["10:00", "02:00"]],
            wed: [["10:00", "02:00"]],
            thu: [["10:00", "02:00"]],
            fri: [["10:00", "04:00"]],
            sat: [["10:00", "04:00"]],
            sun: [["12:00", "02:00"]],
        },
        mapImage: "/shops/generic/map.png",
        mapsUrl: "https://www.google.fr/maps/place/${encodeURIComponent(fullAddress)}",
        contact: {
            phoneE164: "${phoneE164}",
            phoneDisplay: "${phone}",
            address: "${fullAddress}",
        },
        dailyOffer: {
            title: "Offre du jour",
            price: "4,99 €",
            oldPrice: "7,99 €",
            image: "/shops/generic/offer.png",
            protocolHref: "#reservation",
        },
        products: [
            { id: "p1", title: "Nom du produit", price: "7,99 €", image: "/shops/generic/p1.png" },
            { id: "p2", title: "Snack box", price: "5,50 €", image: "/shops/generic/p2.png" },
            { id: "p3", title: "Panier frais", price: "12,00 €", image: "/shops/generic/p3.png" },
        ],
        about: {
            p1: "Retrouvez-nous au ${address}, ${zipcode} Paris.",
            p2: "Votre commerce Hey de quartier.",
            images: [
                "/shops/generic/a1.png",
                "/shops/generic/a2.png",
                "/shops/generic/a3.png",
            ],
        },
    }`;
        newShops.push(shopObj);
    }
}

// 3. Insert new shops
// We reconstruct the file content.
// newLines currently has content WITHOUT any Hey shops.
// We expect `export const SHOPS: Shop[] = [` on one line.
// We want to insert updates AFTER that line.

const outputLines = [];
const headerMarker = 'export const SHOPS: Shop[] = [';

for (const line of newLines) {
    outputLines.push(line);
    if (line.includes(headerMarker)) {
        // Insert new shops immediately after
        outputLines.push(newShops.join(',\n') + ',');
    }
}

fs.writeFileSync(shopsFilePath, outputLines.join('\n'), 'utf8');
console.log(`Re-imported ${newShops.length} Hey shops with correct data.`);
