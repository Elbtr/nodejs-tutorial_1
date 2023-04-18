// npm -global command, comes with node
// npm --version

// local dependency - use it only in this particular prject
// npm i <packageName>

// holabl dependency - use it in any project
// npm install -g <packageName>
// sudo npm install -g <packageName> (mac)

// package.json - manifest file (stores important info about project/package)
// mamual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

// cara memanggil depedency dari package.json atau package yang telah didownload

// const lodash = require("lodash");

// const item = [1, [2, [3, [4]]]];
// const newItem = lodash.flattenDeep(item);

// console.log(newItem);
// console.log("elbtr");

// console.log("first task");
// console.time();

// BLOCKING CODE

// const http = require("http");

// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     res.end("Home page");
//   }
//   if (req.url === "/about") {
//     // BLOCKING CODE !!!
//     for (let i = 0; i < 1000; i++) {
//       for (let j = 0; j < 1000; j++) {
//         console.log(`${i} ${j}`);
//       }
//     }
//     res.end("About Page");
//   }
// });

// server.listen(5000);

// PROMISE

// const { readFile } = require("fs");

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf8", (err, data) => {
//       if (err) {
//         reject(err);
//         return;
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };

// getText("./content/first.txt")
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));

// PROMISE COLLAB WITH ASYNCHRONOUS

// const start = async () => {
//   try {
//     const first = await getText("./content/first.txt");
//     const second = await getText("./content/second.txt");
//     console.log(first);
//     console.log(second);
//   } catch (err) {
//     console.log(err);
//   }
// };

// start();

// ASYNC AND SHORT PROMISES/CALLBACK PATTERNS/ASYNC PATTERNS

// First step

// const { readFile, writeFile } = require("fs");
// const util = require("util");

// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

// const start = async () => {
//   try {
//     const first = await readFilePromise("./content/first.txt", "utf8");
//     const second = await readFilePromise("./content/second.txt", "utf8");
//     await writeFilePromise(
//       "./content/result-mind-grenade.txt\n",
//       `THIS IS AWESOME : ${first} and ${second} `,
//       { flag: "a" }
//     );

//     console.log(first);
//     console.log(second);
//   } catch (err) {
//     console.log(err);
//   }
// };

// Second step

const { readFile, writeFile } = require("fs").promises;

const start = async () => {
  try {
    const first = await readFile("./content/first.txt", "utf8");
    const second = await readFile("./content/second.txt", "utf8");
    await writeFile(
      "./content/result-mind-grenade.txt \n",
      `second step : ${first} and ${second} `,
      { flag: "a" }
    );

    console.log(first);
    console.log(second);
  } catch (err) {
    console.log(err);
  }
};

start();
