const {
    dataFormatter,
    fileNameFormatter,
} = require('./formatter');

describe('dataFormatter', () => {
    it('should give formatted data', () => {
        expect(dataFormatter("abc\n\ndef\n123", '')).toEqual(["abc", "def", "123"]);
    });
    it('should give filtered formatted data when filter character is given', () => {
        expect(dataFormatter("apple\norange\navocado", 'a')).toEqual(["apple", "avocado"]);
    });
});

describe('fileNameFormatter', () => {
    it('should give formatted data', () => {
        expect(fileNameFormatter("a.txt")).toEqual("a");
    });
});