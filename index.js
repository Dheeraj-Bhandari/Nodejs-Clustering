const express = require("express");
const PORT = 3000;
const app = express();

app.get("/", (req, res)=>res.send(`Hello Coders`))

app.get("/loadtest", (req, res)=>{
    let total = 0;

    while(total < 500000000){
        total += 1;
    }

    res.send(`the compute value is ${total}`)
})

app.listen(PORT, () =>{
    console.log(`app listing on port ${PORT} with PID ${process.pid}`)
})