//writing somegthing to file many times
const fs = require("node:fs");

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
    for (let i = 0; i < 100; i++) {
        const fileData = await fs.promises.readFile("file1.txt")
        const res = "Buffer added in each loop is \n" + fileData + "\n" + data
        console.log(res);
        const buff = Buffer.from(res,"utf-8")
        await fs.promises.writeFile("file1.txt", buff)
    }
}
