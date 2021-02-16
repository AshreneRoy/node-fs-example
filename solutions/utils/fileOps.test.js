const fs = require('fs');

const {
    listFiles,
    readFile,
    updateFile,
} = require('./fileOps');

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