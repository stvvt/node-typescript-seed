import * as fs from 'fs';

export function readTextFile(filename: string): Promise<string> {
    return new Promise((resolve: Function, reject: Function) => {
        fs.readFile(filename, (err, data) => {
            if (err) {
                reject(err);
                return;
            }

            resolve(data.toString());
        });
    });
}
