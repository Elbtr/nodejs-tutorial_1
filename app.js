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

const lodash = require("lodash");

const item = [1, [2, [3, [4]]]];
const newItem = lodash.flattenDeep(item);

console.log(newItem);
