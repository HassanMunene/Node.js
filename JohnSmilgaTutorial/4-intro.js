const { rejects } = require('assert');
const {readFile} = require('fs');
const { resolve } = require('path');

readFile('./content/first.txt', 'utf8', (err, data) => {
    if(err) {
        console.log(err)
        return;
    } else {
        console.log(data);
    }
})

const getText = (path) => {
    return new Promise ((resolve, reject) => {
        readFile(path, 'utf8', (err, data) => {
            if(err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}
getText('./content/first.txt')
.then((result) => {
    console.log(result);
})
.catch((err)=> {
    console.log(err);
})