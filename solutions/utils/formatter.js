const path = require('path');

const dataFormatter = (string, filterCharacter) => {
    const formattedData = string.split('\n');
    return formattedData.filter((value) => {
        return value !== '' && value.startsWith(filterCharacter) ? true : false;
    });
}

const fileNameFormatter = (fileName) => {
    return path.parse(fileName).name;
}

module.exports = {

    dataFormatter,
    fileNameFormatter,

}