const cluster = require("cluster");
const os = require("os");
const path = require("path");

const cpuCount = os.cpus().length;

console.log(`Total number of CPUs = ${cpuCount}`);
console.log(`PID = ${process.pid}`);

cluster.setupPrimary({
    exec: path.join(__dirname, "index.js")
});

for (let i = 0; i < cpuCount; i++) {
    cluster.fork();
}

cluster.on("exit", (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} has been killed`);
    console.log("Starting another worker");
    cluster.fork();
});
