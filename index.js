// const os = require("os");

// console.log({
//   totalMem: os.totalmem(),
//   freeMem: os.freemem(),
//   platform: os.platform(),
//   cpus: os.cpus(),
// });

// Module Syntax => ES6
// import something from "./lala"
// export default

// import { totalmem, freemem, platform, cpus } from "os";

// console.log({
//   totalMem: totalmem(),
//   freeMem: freemem(),
//   platform: platform(),
//   cpus: cpus(),
// });

// Common JS
// const os = require("os");

// console.log({
//   totalMem: os.totalmem(),
//   freeMem: os.freemem(),
//   platform: os.platform(),
//   cpus: os.cpus(),
// });

// console.log(module);

// const { addRainbows, addUnicorns } = require("./utilities");

// console.log(addRainbows(addUnicorns("Hello unicorns!")));

// const fs = require("fs");

// try {
//   const result = fs.readdirSync("/");
//   console.log(result);
// } catch (error) {
//   console.log(error.message);
// }

// fs.readdir("1", (error, items) => {
//   if (error) {
//     console.log(error.message);
//   } else {
//     console.log(items);
//   }
// });

// fs.readFile("myFile.txt", "utf8", (err, data) => {
//   console.log(data);
// });

const http = require("http");
const fs = require("fs");
const { addRainbows, addUnicorns } = require("./utilities");

const requestHandler = (request, response) => {
  fs.readFile("index.html", null, (err, data) => {
    if (err) {
      response.writeHead(500);
      response.write("Internal Server Error");
    } else {
      response.writeHead(200, { "Content-Type": "text/html" });
      response.write(data);
    }
    response.end();
  });
};

const server = http.createServer(requestHandler);

server.listen(3001, () => {
  console.log(addRainbows("Server is listening on port 3001"));
});
