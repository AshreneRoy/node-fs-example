const path = require('path');
const fileOps = require('../utils/');

const readAllFiles = async (dir, filterCharacter = '') => {

    let filesInDir;
    let fileContent = {};

    try {
        filesInDir = await fileOps.listFiles(dir);
        const promises = filesInDir.map(async (file) => {
            let content = await fileOps.readFile(dir + '/' + file);
            fileContent[fileNameFormatter(file)] = dataFormatter(content, filterCharacter);
            return content;
        });
        await Promise.all(promises);
    } catch(err) {
        throw new Error('Unable to perform file operation. ' + err);
    }

    return fileContent;
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