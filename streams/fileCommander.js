const fs = require('fs');
const path = require("path")

const commands = {
    "read": "READFILE",
    "delete": "DELETEFILE",
    "create": "CREATEFILE",
    "append": "APPENDFILE"

}
const processFileCommandsHandler = {
    "readfile": async (filename,) => {
        const completefilePath = path.join(__dirname, filename.trim())
        const newData = await fs.promises.readFile(completefilePath, "utf-8")
        console.log(newData);
    },
    "deletefile": async (filename) => {
        try {
            const completefilePath = path.join(__dirname, filename.trim())
            await fs.promises.unlink(completefilePath)
        } catch (ex) {
            console.log("file already deleted");
        }
    },
    "createfile": async (filename, rest_content) => {
        try {
            const completefilePath = path.join(__dirname, filename.trim())
            await fs.promises.writeFile(completefilePath, rest_content)
        }
        catch (e) { }
    },
    "appendfile": async (filename) => {
        try {
            const completefilePath = path.join(__dirname, filename.trim())
            const newData = await fs.promises.readFile(completefilePath, "utf-8")
            const all_data = newData + "\n" + rest_content
            await fs.promises.writeFile(completefilePath, all_data)
        }
        catch (e) { }
    }
}
async function ReadCommand() {
    let data = await fs.promises.readFile("./fileCommands.txt")
    data = data.toString("utf-8").toLowerCase();
    let [command, filename, ...rest_content] = data.split(" ")
    rest_content = rest_content.join(" ")
    return { command, filename, rest_content, }

}

fs.watch("./fileCommands.txt", async (event, fileName) => {
    const { command, filename, rest_content } = await ReadCommand()
    await processFileCommandsHandler[command](filename, rest_content)
})
