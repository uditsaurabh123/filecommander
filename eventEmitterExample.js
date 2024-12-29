const eEmitter = require("events")

class CustomEvent extends eEmitter{
}

const e = new CustomEvent()

e.on("foo",()=>{
    console.log("foo has been fired and the data has been emitted.")
})
e.on("foo",()=>{
    console.log("foo has been fired 2 time and the new data has been emitted.")
})
e.on("foo",(text)=>{
    console.log("foo has been fired 2 time and the new data has been emitted.",text)
})
e.emit("foo")
e.emit("foo","New text has been emitted")