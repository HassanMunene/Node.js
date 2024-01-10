const { readFile } = require("fs")

const getText = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, 'utf8', (err, data) => {
            if(err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}
// getText('./content/first.txt')
// .then((result) => {
//     console.log(result);
// })
// .catch((err) => {
//     console.log(err);
// });

const readLogText = async () => {
    try {
        const result = await getText('./content/first.txt');
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}
readLogText();

