const fs = require("fs");

(async () => {
    console.time("---time---");
    const src = await fs.promises.open("src.txt", "r")
    const dst = await fs.promises.open("dst.txt", "w")
    const fsReadStream = src.createReadStream()
    const fsWriteStream = dst.createWriteStream()
    fsReadStream.on("data", (chunk) => {
        console.log("the length of chunk is --->", chunk.length, "---->")
        if (!fsWriteStream.write(chunk)) {
            fsReadStream.pause()
        }
    }
    );
    fsWriteStream.on("drain", () => {
        console.log("---- draining is happening ----")
        fsReadStream.resume()
    })
    fsReadStream.on("end", () => {
        fsWriteStream.write("\n ----end----")
        console.timeEnd("---time---")
    })
    fsWriteStream.on("end", () => console.timeEnd("---time---"))
})();
