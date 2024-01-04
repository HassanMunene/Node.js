const fs = require('fs');
const filename = process.argv[2];

if (!filename) {
    throw Error('A target file must be provided!');
}
fs.watch(filename, () => console.log(`file ${filename} changed!!`));
console.log(`Now watching ${filename} for changes`);
