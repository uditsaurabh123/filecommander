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
    await writeToFileMillionTimes("hello!!")
    console.timeEnd("time many")
})()


async function writeToFileMillionTimes(data) {
    for (let i = 0; i < 1000; i++) {
        const fileData = await fs.promises.readFile("file1.txt")
        await fs.promises.writeFile("file1.txt", fileData + "\n" + data)
    }
}
