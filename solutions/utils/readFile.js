const fs = require('fs');

const readFile = (fileName) => {
    const fileContentPromise =  new Promise((resolve, reject) => {
        fs.readFile(fileName, (err, data) => {
            if(err)
                reject(err.message);
            resolve(data.toString());
        });
    });
    return fileContentPromise;
}

module.exports = readFile;