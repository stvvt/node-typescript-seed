import { readTextFile } from '../src/readTextFile';
import { expect } from 'chai';

describe('readTextFile', () => {
    it('should read the contents of a file', async () => {
        const contents = await readTextFile(__dirname + '/file.txt');

        expect(contents).to.be.equal('test file');
    });
});
