const fs = require('fs');

const listFiles = (dirName) => {
    const fileListPromise = new Promise((resolve, reject) => {
        fs.readdir(dirName, (err, files) => {
            if (err)
                reject(err.message)
            resolve(files)
        }); 
    })
    return fileListPromise;
}


module.exports = listFiles;