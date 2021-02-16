const fs = require('fs');

const updateFile = (fileName, content) => {
    const updateFilePromise = new Promise((resolve, reject) => {
        fs.writeFile(fileName, content,  (err, data) => {
            if(err)
                reject(err.message);
            resolve(data);
        });
    });
    return updateFilePromise;
}

module.exports = updateFile;