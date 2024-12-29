const { Buffer } = require("buffer")
const b = Buffer.alloc(1e9)
/*
{setInterval(() => {
    for (let i = 0; i < b.length; i++) {
        b[i] = 0x04
    }
}, 5000)}

for (let i = 0; i < b.length; i++) {
    b[i] = 0x05
}
console.log(b);
*/
setInterval(() => {
    for (let i = 0; i < b.length; i++) {
        b[i] = 0x04
    }
}, 5000)
