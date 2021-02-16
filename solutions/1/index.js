const path = require('path');
const fileOps = require('../utils/');

const readAllFiles = async (dir, filterCharacter = '') => {

    let fileContentPromise;

    try {
        const filesInDir = await fileOps.listFiles(dir);
        fileContentPromise = filesInDir.reduce(async (acc, file) => {
            let fileContent = await acc;
            let content = await fileOps.readFile(dir + '/' + file);
            acc = { 
                ...fileContent,
                [fileNameFormatter(file)]: dataFormatter(content, filterCharacter)
            };
            return acc;
        }, {});
    } catch(err) {
        throw new Error('Unable to perform file operation. ' + err);
    }

    return fileContentPromise;
}

const dataFormatter = (string, filterCharacter) => {
    const formattedData = string.split('\n');
    return formattedData.filter((value) => {
        return value !== '' && value.startsWith(filterCharacter) ? true : false;
    });
}

const fileNameFormatter = (fileName) => {
    return path.parse(fileName).name;
}

// readAllFiles('./seed').then(console.log);

module.exports = readAllFiles;