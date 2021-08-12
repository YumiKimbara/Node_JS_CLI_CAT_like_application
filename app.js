const express = require("express");
const app = express();

const fs = require("fs");

fs.writeFile("somefile.txt", "test", () => {
  console.log("file was created");
});

fs.appendFile("somefile.txt", "test2", () => {
  console.log("file was appended");
});

fs.rename("somefile.txt", "somefile2.txt", () => {
  console.log("file was renamsed");
});

fs.unlink("somefile2.txt", (err) => {
  if (err) {
    console.log(err);
    return;
  }
});

fs.readdir("/", (err, files) => {
  files.forEach((file) => console.log(file));
});

fs.copyFile("somefile.txt", "copiedfile.txt", () => {
  console.log("file was coppied");
});

try {
  const fileRename = fs.rename("/copiedfile.txt", "/coppiedfile/");
  console.log(fileRename);
} catch (err) {
  console.log(err);
}

try {
  const fileSize = fs.statSync("copiedfile.txt");
  console.log("file size", fileSize);
} catch (err) {
  console.log(err);
}

app.listen(5050);
