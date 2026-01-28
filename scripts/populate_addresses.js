const fs = require('fs');
const path = require('path');

const shopsFilePath = path.join(__dirname, '..', 'data', 'shops.ts');
let content = fs.readFileSync(shopsFilePath, 'utf8');

// Regex to match the shop objects
// We'll iterate line by line to keep it simple and robust (streaming edit style)
const lines = content.split('\n');
const newLines = [];

// State machine
let insideShop = false;
let currentShopBuffer = [];
let hasHeyName = false;
let aboutP1 = "";

for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Check for start of a shop object (rough heuristic based on formatting)
    if (line.trim().startsWith('{') && !insideShop) {
        insideShop = true;
        currentShopBuffer = [line];
        hasHeyName = false;
        aboutP1 = "";
        continue;
    }

    if (insideShop) {
        currentShopBuffer.push(line);

        // Capture name
        if (line.includes('name: "Hey"')) {
            hasHeyName = true;
        }

        // Capture about p1
        // p1: "Retrouvez-nous au 77 Rue Crozatier, 75012 Paris.",
        const p1Match = line.match(/p1: "(.*?)",/);
        if (p1Match) {
            aboutP1 = p1Match[1];
        }

        // Check for closing brace of shop object
        // Assuming formatted like `    },` or `    }` at indentation level 4
        if (line.trim().startsWith('},') || (line.trim() === '}' && lines[i + 1]?.trim() === ']')) {
            insideShop = false;

            // Should we modify this shop buffer?
            // Find where to insert `address: "..."` inside `contact: { ... }`
            let contactStart = -1;
            let contactEnd = -1;

            for (let j = 0; j < currentShopBuffer.length; j++) {
                if (currentShopBuffer[j].includes('contact: {')) contactStart = j;
                if (contactStart !== -1 && currentShopBuffer[j].trim() === '},') {
                    contactEnd = j;
                    break;
                }
            }

            if (contactStart !== -1 && contactEnd !== -1) {
                // Determine address
                let addressValue = "8 shou édition, 75000"; // Default

                if (hasHeyName && aboutP1) {
                    // Extract from "Retrouvez-nous au ADDRESS, ZIP Paris."
                    // Regex: "Retrouvez-nous au (.*) Paris."
                    // Careful with greedy match.

                    // Specific logic for "Hey" shops I generated:
                    // "Retrouvez-nous au 77 Rue Crozatier, 75012 Paris."
                    // Wanted: "77 Rue Crozatier, 75012"

                    const marker = "Retrouvez-nous au ";
                    if (aboutP1.startsWith(marker)) {
                        const tail = aboutP1.substring(marker.length);
                        // Remove suffix " Paris." or " Paris"
                        // Note: My generator put " Paris."
                        const suffix = " Paris.";
                        if (tail.endsWith(suffix)) {
                            addressValue = tail.substring(0, tail.length - suffix.length);
                        } else {
                            // Fallback, just remove trailing dot if any
                            addressValue = tail.replace(/\.$/, '').replace(/ Paris$/, '');
                        }
                    }
                }

                // Insert address field before the closing brace of contact
                // We'll insert it as the last item in contact
                // `            address: "VALUE",`
                currentShopBuffer.splice(contactEnd, 0, `            address: "${addressValue}",`);
            }

            newLines.push(...currentShopBuffer);
        }
    } else {
        newLines.push(line);
    }
}

const newContent = newLines.join('\n');
fs.writeFileSync(shopsFilePath, newContent, 'utf8');
console.log('Populated addresses successfully.');
