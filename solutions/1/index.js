const fileOps = require('../utils/fileOps');
const formatter = require('../utils/formatter');

const readAllFiles = async (dir, filterCharacter = '') => {

    let fileContentPromise;

    try {
        const filesInDir = await fileOps.listFiles(dir);
        fileContentPromise = filesInDir.reduce(async (acc, file) => {
            let fileContent = await acc;
            let content = await fileOps.readFile(dir + '/' + file);
            acc = { 
                ...fileContent,
                [formatter.fileNameFormatter(file)]: formatter.dataFormatter(content, filterCharacter)
            };
            return acc;
        }, {});
    } catch(err) {
        throw new Error('Unable to perform file operation. ' + err);
    }

    return fileContentPromise;
}

// readAllFiles('./seed').then(console.log);

module.exports = readAllFiles;