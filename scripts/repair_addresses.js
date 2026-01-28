const fs = require('fs');
const path = require('path');

const shopsFilePath = path.join(__dirname, '..', 'data', 'shops.ts');
let content = fs.readFileSync(shopsFilePath, 'utf8');

const lines = content.split('\n');
const newLines = [];

let insideShop = false;
let currentShopBuffer = [];
let contactStart = -1;
let contactEnd = -1;
let hasAddress = false;

for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Start of shop
    if (line.trim().startsWith('{') && !insideShop) {
        insideShop = true;
        currentShopBuffer = [line];
        contactStart = -1;
        contactEnd = -1;
        hasAddress = false;
        continue;
    }

    if (insideShop) {
        currentShopBuffer.push(line);
        if (line.includes('address: "')) {
            hasAddress = true;
        }

        // Track contact block
        if (line.includes('contact: {')) contactStart = currentShopBuffer.length - 1;
        if (contactStart !== -1 && line.trim() === '},') {
            contactEnd = currentShopBuffer.length - 1;
        }
        // Also handle contact block ending if it's the last property and has no comma? usually not case here.

        // End of shop
        // Handles `},` or `}` followed by `];` or `]`
        const isEndOfShop = line.trim().startsWith('},') || (line.trim() === '}' && (lines[i + 1]?.trim().startsWith(']')));

        if (isEndOfShop) {
            insideShop = false; // Reset

            if (!hasAddress && contactEnd !== -1) {
                // Insert address at end of contact block
                // buffer[contactEnd] is `        },`
                // we want to insert before it.
                currentShopBuffer.splice(contactEnd, 0, `            address: "8 shou édition, 75000",`);
            }
            newLines.push(...currentShopBuffer);
        }
    } else {
        newLines.push(line);
    }
}

const newContent = newLines.join('\n');
fs.writeFileSync(shopsFilePath, newContent, 'utf8');
console.log('Repaired missing addresses.');
