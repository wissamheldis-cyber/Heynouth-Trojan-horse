const fs = require('fs');
const path = require('path');

const shopsFilePath = path.join(__dirname, '..', 'data', 'shops.ts');
const content = fs.readFileSync(shopsFilePath, 'utf8');

const lines = content.split('\n');
const newLines = [];
const districtCounters = {};

let insideDailyOffer = false;
let currentDistrict = null;
let currentSlug = null; // To help debug/track

// We need to know which shop we are in to assign the label based on the counter for THAT district.
// But we find `districtLabel` BEFORE `dailyOffer`.
// So we can track `currentDistrict`.

for (let i = 0; i < lines.length; i++) {
    let line = lines[i];

    // Detect District
    const districtMatch = line.match(/districtLabel: "(.*?)",/);
    if (districtMatch) {
        currentDistrict = districtMatch[1];
        if (!districtCounters[currentDistrict]) {
            districtCounters[currentDistrict] = 0;
        }
        // Increment counter for this shop?
        // Wait, we should increment ONLY when we process the daily offer?
        // Or increment once per shop.
        // Let's increment here.
        districtCounters[currentDistrict]++;
    }

    // Detect Daily Offer Block
    if (line.includes('dailyOffer: {')) {
        insideDailyOffer = true;

        // We need to decide the label.
        // We use the current count.
        // Count 1, 2 -> Day (default)
        // Count 3, 4 -> Week
        // Count 5, 6 -> Month
        // Count > 6 -> Day (cycle? or default?)

        const count = districtCounters[currentDistrict];
        let label = null;

        // Logic:
        // 1, 2 -> Day
        // 3, 4 -> Week
        // 5, 6 -> Month
        // 7, 8 -> Day
        // ...

        // (count - 1) % 6
        // 0, 1 -> Day
        // 2, 3 -> Week
        // 4, 5 -> Month

        const mod = (count - 1) % 6;

        if (mod === 2 || mod === 3) {
            label = "OFFRE DE LA SEMAINE";
        } else if (mod === 4 || mod === 5) {
            label = "OFFRE DU MOIS";
        } else {
            label = "OFFRE DU JOUR"; // Explicitly set it or leave default?
            // User requested: "2 ai ..., 2 ai ..., 2 autres ..."
            // I'll set it explicitly to be sure.
        }

        newLines.push(line);
        // Insert label property immediately after opening brace
        newLines.push(`            label: "${label}",`);
        continue;
    }

    // Check if label already exists (from previous runs or manual edits) and skip it to avoid duplicates
    // If we are inside dailyOffer and line matches `label: ...`, we skip it because we just inserted ours.
    if (insideDailyOffer) {
        if (line.trim().startsWith('label:')) {
            continue;
        }
        if (line.trim().startsWith('},') || line.trim() === '}') {
            insideDailyOffer = false;
        }
    }

    newLines.push(line);
}

fs.writeFileSync(shopsFilePath, newLines.join('\n'), 'utf8');
console.log('Applied offer labels based on district distribution.');
