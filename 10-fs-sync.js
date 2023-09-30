// FS

const {readFileSync, writeFileSync} = require('fs');

const firstFile = readFileSync('./content/first.txt', 'utf8');
console.log(firstFile);

writeFileSync(`./content/result-sync.txt`, `Here is the result : ${firstFile}`);