let fs = require('fs');
let zlib = require('zlib');

let readable = fs.createReadStream(`${__dirname}/data.txt`, {
    encoding: 'utf8',
    highWaterMark: 16 * 1024
});

let writeable = fs.createWriteStream(`${__dirname}/data2.txt`);
let compressed = fs.createWriteStream(`${__dirname}/data.txt.gz`);


let gzip = zlib.createGzip();

readable.pipe(writeable);
readable.pipe(gzip).pipe(compressed);
