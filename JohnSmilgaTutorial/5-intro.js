const { readFile } = require("fs")

const myPromise = new Promise((resolve, reject) => {
    // readFile
    readFile('./content/first.txt', 'utf8', (err, data) => {
        if(err) {
            reject(err);
        } else {
            resolve(data);
        }
    });
});
myPromise
.then((result) => {
    console.log(result);
})
.catch((err) => {
    console.log(err);
})