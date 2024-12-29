const {Buffer} = require("buffer")

const b = Buffer.alloc(10000, 0)

const unsafeBuffer = Buffer.allocUnsafe(10000)

console.log(unsafeBuffer);
