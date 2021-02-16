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

module.exports = {
    listFiles,
    readFile,
    updateFile,
}