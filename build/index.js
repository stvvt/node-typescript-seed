"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readTextFile_1 = require("./readTextFile");
readTextFile_1.readTextFile('./README.md')
    .then(console.log)
    .catch(console.error);
