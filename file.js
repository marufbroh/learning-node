const fs = require("fs");

const readText = fs.readFileSync("./texts/read.txt", "utf-8");

const writeText = fs.writeFileSync(
  "./texts/write.txt",
  readText + "This is Maruf broh"
);

console.log(writeText);
