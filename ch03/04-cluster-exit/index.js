const cluster = require('cluster');
cluster.schedulingPolicy = cluster.SCHED_RR;
const http = require('http');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`exit ${code} : ${signal} `);
    // workerが明示的な正常終了でなければ、workerを再生成して補充する
    if (code !== 0 && !worker.exitedAfterDisconnect) {
        cluster.fork();
    }
  });
} else {
  // Workers can share any TCP connection
  // In this case it is an HTTP server
  http.createServer((req, res) => {
    res.writeHead(200);
    res.end(`hello world ${process.pid} \n`);
  }).listen(8000);

  console.log(`Worker ${process.pid} started`);
}