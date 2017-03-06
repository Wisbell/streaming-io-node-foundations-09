
const { createReadStream, appendFile } = require('fs');
const { Transform, Writable } = require('stream');

// Make my own Transform stream
const transformStream = Transform();

const writeStream = Writable();

const outputFile = process.argv[2];

const readFile = 'languages.json';

let readStream = createReadStream(readFile);

transformStream._transform = (buffer, _, done) => {
  done(null, `${buffer.toString().toUpperCase()}`)
};

writeStream._write = (buffer, encode, done) => {
    console.log(buffer)
    appendFile(outputFile, buffer.toString())

};


readStream.pipe(transformStream).pipe(writeStream);
