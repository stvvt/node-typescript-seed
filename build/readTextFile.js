"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
function readTextFile(filename) {
    return new Promise(function (resolve, reject) {
        fs.readFile(filename, function (err, data) {
            if (err) {
                reject(err);
                return;
            }
            resolve(data.toString());
        });
    });
}
exports.readTextFile = readTextFile;
