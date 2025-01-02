const fs = require("fs")

console.log(fs.readFileSync("./text.txt"));
console.log("string",fs.readFileSync("./text.txt").toString())
console.log("hex", fs.readFileSync("./text.txt").toString("hex"))
console.log("binary", fs.readFileSync("./text.txt").toString("binary"))
console.log("utf-8", fs.readFileSync("./text.txt").toString("utf-8"))
console.log("utf -16", fs.readFileSync("./text.txt").toString("utf-16le"))
