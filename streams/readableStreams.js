const fs = require("fs");

(async () => {
    const fileHandle = await fs.promises.open("./dst.txt", "r")
    const readableStream = fileHandle.createReadStream()
    console.log(readableStream.readableHighWaterMark);
    readableStream.on("data", (chunk) => {
        console.log(chunk.toString());
    })
    readableStream.on("readable", () => {
        const data = readableStream.read()
        if (data != null) {
            console.log(data.toString());
        }
    })
})()
