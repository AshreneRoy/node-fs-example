const listFiles = require('./listFiles');
const fs = require("fs");

describe('listFile', () => {

    it('should list files when given a directory', () => {
        jest.spyOn(fs, 'readdir').mockImplementation((file, cb) => cb(null, 'xyz'));
        listFiles('./somedir').then((resolve) => {
            expect(resolve).toEqual('xyz');
        });
    });

    it('should throw error when given a directory is not present', () => {
        jest.spyOn(fs, 'readdir').mockImplementation((file, cb) => cb(new Error('Test error: Dir not present'), null));
        listFiles('./xyz').catch((reject) => {
            expect(reject).toEqual('Test error: Dir not present');
        });
    });
    
});