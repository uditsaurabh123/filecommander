setTimeout(()=>console.log("hello"),0)

async function wait () {
    for (let i = 0; i <= 10000000000; i++) {
    }
}
wait().then(console.log("it has started"))