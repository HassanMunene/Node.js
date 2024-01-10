const {readFile, writeFile} = require('fs');
const util = require('util')

const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

const readLogText = async () => {
    try {
        const first = await readFilePromise('./content/first.txt', 'utf8');
        console.log(first);
        const second = await readFilePromise('./content/second.txt', 'utf8');
        console.log(second);
        await writeFilePromise('./content/using-utils.txt', 'THIS IS REALLY AWESOME');
    } catch (error) {
        console.log(error);
    }
}
readLogText();