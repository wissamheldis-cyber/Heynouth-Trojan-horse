const fs = require('fs');
const path = require('path');

const shopsPath = path.join(__dirname, '../data/shops.ts');
const fileContent = fs.readFileSync(shopsPath, 'utf8');

// We want to add `rating: 5,` after `name: "...",` for every shop.
// Pattern:
// name: "...",
// districtLabel: "...",

// We will look for `name: ".*?",` followed by newline/whitespace and `districtLabel`.
// And insert `rating: 5,` in between.

let newContent = fileContent.replace(
    /(name: ".*?",)(\s+)(districtLabel:)/g,
    (match, nameLine, spacing, districtLabel) => {
        return `${nameLine}${spacing}rating: 5,${spacing}${districtLabel}`;
    }
);

if (newContent !== fileContent) {
    fs.writeFileSync(shopsPath, newContent, 'utf8');
    console.log('Successfully added rating: 5 to all shops.');
} else {
    console.log('No shops needed updating (or regex failed).');
}
