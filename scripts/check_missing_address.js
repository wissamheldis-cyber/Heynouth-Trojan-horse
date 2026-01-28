const fs = require('fs');
const path = require('path');

const shopsFilePath = path.join(__dirname, '..', 'data', 'shops.ts');
const content = fs.readFileSync(shopsFilePath, 'utf8');

// Quick parse to find blocks
const lines = content.split('\n');
let missingCount = 0;
let insideShop = false;
let currentShopBuffer = [];
let hasAddress = false;
let shopLineStart = 0;

for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.trim().startsWith('{') && !insideShop) {
        insideShop = true;
        currentShopBuffer = [line];
        hasAddress = false;
        shopLineStart = i + 1;
        continue;
    }

    if (insideShop) {
        currentShopBuffer.push(line);
        if (line.includes('address: "')) {
            hasAddress = true;
        }

        if (line.trim().startsWith('},') || (line.trim() === '}' && lines[i + 1]?.trim() === ']')) {
            insideShop = false;
            if (!hasAddress) {
                console.log(`Missing address in shop starting at line ${shopLineStart}`);
                missingCount++;
            }
        }
    }
}

if (missingCount === 0) {
    console.log("All shops have an address.");
} else {
    console.log(`Found ${missingCount} shops missing an address.`);
    process.exit(1);
}
