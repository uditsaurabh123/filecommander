const http = require("node:http")
const fs = require("node:fs")

const server = http.createServer()

server.on("request", (request, response) => {
    const result = fs.readFileSync("./text.txt")
    console.log(result);
    response.setHeader("Content-Type", "text/plain")
    response.end(result)
})

server.listen(4000, "127.0.0.1", () => {
    console.log("server is listening:", server.address());
})
