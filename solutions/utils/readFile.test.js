const fs = require('fs');
const readFile = require('./readFile');

describe('readFile', () => {

    it('should return file content on being called', () => {
        jest.spyOn(fs, 'readFile').mockImplementation((file, cb) => cb(null, 'xyz'));
        const promise = readFile('file.txt')
        expect(promise).resolves.toEqual('xyz')
    });

    it('should throw error when file is not found', () => {
        jest.spyOn(fs, 'readFile').mockImplementation((file, cb) => cb(new Error('Test error: no file found'), null));
        const promise = readFile('noSuchFile.txt')
        expect(promise).rejects.toEqual('Test error: no file found')
    });
    
})