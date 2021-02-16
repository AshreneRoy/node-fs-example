const readAllFiles = require('./');
const fileOps = require('../utils/');

describe('readAllFiles', () => {

    beforeEach(() => {
        jest.spyOn(fileOps, 'listFiles').mockResolvedValue(['a.txt', 'b.txt']);
    });

    it('should read content of all files in a directory', (done) => {
        jest.spyOn(fileOps, 'readFile').mockResolvedValue('abc\nsome text\ndef');
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
        readAllFiles('somedir').then((resolved) => {
            expect(resolved).toEqual({"a": ["abc", "some text", "def", "lol"], "b": ["abc", "some text", "def", "lol"]});
            done();
        });
    });

    it('should read content of all files and filter if filter character is given', (done) => {
        jest.spyOn(fileOps, 'readFile').mockResolvedValue('apple\napricot\navocado\n\norange');
        readAllFiles('somedir', 'a').then((resolved) => {
            expect(resolved).toEqual({"a": ["apple", "apricot", "avocado"], "b": ["apple", "apricot", "avocado"]});
            done();
        });
    });

})