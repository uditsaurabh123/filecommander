//writing somegthing to file many times
const fs = require("fs");

(async function openFileAndWrite() {
    /*
    console.time("time many")
    console.log("this is async function");
    const data = await fs.promises.readFile("file1.txt")
    console.log("the data below is --->", data.toString());
    console.timeEnd("time many")
    */
    console.time("time many")
    await writeToFileMillionTimes()
    console.timeEnd("time many")
    console.log("******************");
})()


async function writeToFileMillionTimes() {

    try {
        const fileHandle = await fs.promises.open("./file1.txt", "w")
        let res = "Buffer added in each loop is\n"
        var fileStream = fileHandle.createWriteStream()
        var fileStream1 = fileHandle.createWriteStream()
        console.log(fileStream.writableHighWaterMark);
        console.log(fileStream.writableLength);
        for (let i = 0; i < 1000000; i++) {
            const buff = Buffer.from(`${res}`, "utf-8")
            fileStream.write(`${i + 1}. ${buff}`)
            fileStream1.write(`${i + 1}. ${buff}`)
            fileStream.write(`------------ \n `)

        }
    }
    catch (e) { }
    finally {
        fileStream1.write(`------------ \n `)
        fileStream.end()
        fileStream1.end()
    }
}
