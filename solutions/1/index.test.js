const readAllFiles = require('./');
const fileOps = require('../utils/fileOps');
const formatter = require('../utils/formatter');

describe('readAllFiles', () => {

    beforeEach(() => {
        jest.spyOn(fileOps, 'listFiles').mockResolvedValue(['a.txt', 'b.txt']);
        jest.spyOn(formatter, 'fileNameFormatter').mockReturnValueOnce("a").mockReturnValueOnce("b");
    });

    it('should read content of all files in a directory', (done) => {
        jest.spyOn(fileOps, 'readFile').mockResolvedValue('abc\nsome text\ndef');
        jest.spyOn(formatter, 'dataFormatter').mockReturnValue(["abc", "some text", "def"]);
        readAllFiles('somedir').then((resolved) => {
            expect(resolved).toEqual({"a": ["abc", "some text", "def"], "b": ["abc", "some text", "def"]});
            done();
        });
    });

    it('should throw error when directory is not found', (done) => {
        jest.spyOn(fileOps, 'listFiles').mockRejectedValue('ENOENT');
        readAllFiles('somedir').catch((error) => {
            expect(error.message).toEqual('Unable to perform file operation. ENOENT');
            done();
        });
    });

    it('should read content of all files and ignore empty lines', (done) => {
        jest.spyOn(fileOps, 'readFile').mockResolvedValue('abc\nsome text\ndef\n\nlol');
        jest.spyOn(formatter, 'dataFormatter').mockReturnValue(["abc", "some text", "def", "lol"]);
        readAllFiles('somedir').then((resolved) => {
            expect(resolved).toEqual({"a": ["abc", "some text", "def", "lol"], "b": ["abc", "some text", "def", "lol"]});
            done();
        });
    });

    it('should read content of all files and filter if filter character is given', (done) => {
        jest.spyOn(fileOps, 'readFile').mockResolvedValue('apple\napricot\navocado\n\norange');
        jest.spyOn(formatter, 'dataFormatter').mockReturnValue(["apple", "apricot", "avocado"]);
        readAllFiles('somedir', 'a').then((resolved) => {
            expect(resolved).toEqual({"a": ["apple", "apricot", "avocado"], "b": ["apple", "apricot", "avocado"]});
            done();
        });
    });

})