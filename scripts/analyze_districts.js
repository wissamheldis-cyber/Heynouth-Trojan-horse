const fs = require('fs');
const path = require('path');

const shopsFilePath = path.join(__dirname, '..', 'data', 'shops.ts');
const content = fs.readFileSync(shopsFilePath, 'utf8');

const lines = content.split('\n');
const districtCounts = {};

let currentDistrict = null;

for (const line of lines) {
    const match = line.match(/districtLabel: "(.*?)",/);
    if (match) {
        currentDistrict = match[1];
        districtCounts[currentDistrict] = (districtCounts[currentDistrict] || 0) + 1;
    }
}

console.log("Shops per district:");
console.log(districtCounts);
