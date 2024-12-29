const {Buffer} = require("buffer")

const memoryAlloc = Buffer.alloc(4)
memoryAlloc[0] = 10
memoryAlloc[1] = 0b1111
memoryAlloc[2] = 0b1110
console.log(memoryAlloc)
console.log(memoryAlloc[0])
console.log(memoryAlloc[1])
console.log(memoryAlloc[2])
console.log(memoryAlloc)
console.log("----------------------")

console.log(memoryAlloc.toString("hex"))

const memoryAllocBinary = Buffer.alloc(4)
memoryAllocBinary[0] = 0b0100
memoryAllocBinary[1] = 0b1000
memoryAllocBinary[2] = 0b0110
memoryAllocBinary[3] = 0b1001
memoryAllocBinary[4] = 0b0010
console.log(memoryAllocBinary)
console.log(memoryAllocBinary[0])
console.log(memoryAllocBinary[1])
console.log(memoryAllocBinary[2])
console.log(memoryAllocBinary)
console.log("----------------------")

console.log(memoryAlloc.toString("hex"))

const buff1 = Buffer.from([0b0100,0b0011])

console.log(buff1.toString("hex"))
