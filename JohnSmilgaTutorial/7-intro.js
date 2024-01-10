const { resolve } = require("path");

console.log('starting promises');

function getData () {
    return new Promise((resolve, reject) => {
        // simulate accessing data
        setTimeout(() => {
            const data = {name: 'Hassan'};
            console.log(data)
            resolve(data);
        }, 2000);
    });
}
function processData (data) {
    return new Promise((resolve, reject) => {
        // simulate processing the data
        setTimeout(() => {
            const pData = `processed: ${JSON.stringify(data)}`;
            console.log(pData);
            resolve(pData);
        }, 1000);
    });
}
function saveData (pData) {
    return new Promise((resolve, reject) => {
        // simulate saving the data
        setTimeout(() => {
            console.log(`saved: ${pData}`);
            resolve();
        }, 1000);
    });
}
getData()
.then((data) => {
    return processData(data);
})
.then((processedData) => {
    return saveData(processedData);
})
.catch((errror) => {
    console.error(errror);
});

console.log('finish promises');