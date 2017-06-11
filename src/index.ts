import { readTextFile } from './readTextFile';

readTextFile('./README.md')
    .then(console.log)
    .catch(console.error);
