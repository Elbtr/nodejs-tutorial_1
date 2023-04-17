const os = require("os");

// info about current user
const user = os.userInfo();
console.log(user);

// method returns the system uptime in seconds
console.log(`The system uptime is ${os.uptime()} seconds`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

let nilaiByte = 0;
let nilaiGb = 0;
let bulat;

if (currentOS.totalMem) {
  nilaiByte = currentOS.totalMem;
  nilaiGb = nilaiByte / 1000000000;
  bulat = nilaiGb.toFixed(2);
  console.log(`Total memory: ${bulat} GB`);
}

if (currentOS.freeMem) {
  nilaiByte = currentOS.freeMem;
  nilaiGb = nilaiByte / 1000000000;
  bulat = nilaiGb.toFixed(2);
  console.log(`Free memory: ${bulat} GB`);
}
console.log(currentOS);
