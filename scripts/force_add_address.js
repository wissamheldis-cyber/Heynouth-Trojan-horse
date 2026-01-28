const fs = require('fs');
const path = require('path');

const shopsFilePath = path.join(__dirname, '..', 'data', 'shops.ts');
const content = fs.readFileSync(shopsFilePath, 'utf8');

// Regex to find contact blocks
// Matches `contact: {` followed by anything lazy until `},`
// We need to be careful not to match nested braces, but contact block is simple here.
// It seems contact block ends with `},` or `}` if it's last (but usually followed by comma in array).

// Pattern: contact:\s*\{[^}]*\}
// We'll iterate through matches.

const newContent = content.replace(/contact\s*:\s*\{([\s\S]*?)\}/g, (match, innerContent) => {
    // Check if address exists
    if (innerContent.includes('address:')) {
        return match;
    }

    // Determine indentation
    // innerContent usually ends with whitespace.
    // We want to insert `address: "8 shou édition, 75000"` before the closing brace.
    // But we need to handle if the last item has comma or not.
    // The innerContent includes comments and newlines.

    // Naive approach: append address at the end of innerContent.
    // If the last real line doesn't have a comma, we might break syntax.
    // But in this file, normally properties end with commas.
    // Let's check if the last non-empty non-comment line ends with comma.

    const lines = innerContent.split('\n');
    // We'll just insert the address property.
    // We can add a comma before it just in case? No, that might create double comma.
    // Safer: Add comma to the previous line if missing?

    // Better: split inner lines, find last property.
    // But comments complicate this.

    // Let's just insert it and assume previous lines are well-formed (usually generated with commas).
    // Our "Hey" shops generated comments might NOT have commas on comments? Comments are ignored.
    // PhoneDisplay line: `phoneDisplay: "...",` -> has comma.

    // So we append:
    // `            address: "8 shou édition, 75000",`

    // We need to preserve newline before the closing brace of the match.
    // The match includes the closing `}`? No, the regex `\{([\s\S]*?)\}` stops at `}`.
    // Wait, `([^}]*)`. So `}` is NOT in innerContent. `match` is the whole thing.

    // So `match` is `contact: { ... }`
    // We want to return `contact: { ... \n            address: "...", \n        }`

    // Remove trailing whitespace/newlines from innerContent temporarily to append cleanly?
    const trimmedInner = innerContent.trimEnd();

    // We assume the indentation of the file is 4 spaces or 8 spaces.
    // The closing brace usually has indentation.

    return `contact: {${trimmedInner}\n            address: "8 shou édition, 75000",\n        }`;
});

fs.writeFileSync(shopsFilePath, newContent, 'utf8');
console.log('Forcefully added addresses via regex.');
