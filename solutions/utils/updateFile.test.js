const fs = require('fs');
const updateFile = require('./updateFile');

describe('updateFile', () => {

    it('should update content of file on being called', () => {
        jest.spyOn(fs, 'writeFile').mockImplementation((fileName, content , cb) => cb(null, 'some data'));
        const promise = updateFile('file.txt', 'some data');
        expect(promise).resolves.toEqual('some data')
    });

    it('should throw error when file is not found', () => {
        jest.spyOn(fs, 'writeFile').mockImplementation((fileName, content , cb) => cb(new Error('Test error: no file found'), null));
        const promise = updateFile('noSuchFile.txt')
        expect(promise).rejects.toEqual('Test error: no file found')
    });
    
})