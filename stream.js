const { createReadStream, appendFile } = require('fs')
const { Transform } = require('stream')

// Make my own Transform stream
const transformStream = Transform()

const outputFile = process.argv[2]

let readStream = createReadStream('languages.json')

transformStream._transform = (buffer, _, done) => {
  done(null, `${buffer.toString().toUpperCase()}`)
}



readStream.pipe(transformStream).pipe(process.stdout)
