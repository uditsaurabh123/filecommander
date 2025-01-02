const fs = require("fs");
(async function writeFile() {
    try {
        const fileHandle = await fs.promises.open("./file1.txt", "w")
        var fileStream = fileHandle.createWriteStream()
        const fileStream2 = fileHandle.createWriteStream()
        let res = "10 \n"
        const buff = Buffer.alloc(2147483646, res)
        const buff2 = Buffer.alloc(2147483646, res)
        fileStream.write(buff)
        fileStream2.write(buff2)

    } catch (err) {
        console.log("the error is logged --->");
    } finally {
        fileStream.close()
        fileStream2.close()
    }
}())
