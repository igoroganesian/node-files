"use strict";

const fsP = require('fs/promises');

// async function cat(path) {
//   let contents;
//   try {
//     contents = await fsP.readFile(path, "utf8");
//     console.log("path: ", contents);
//   } catch (err) {
//     console.log('error caught');
//     process.exit(1);
//   }
//   console.log(contents);
// }

//TODO: minimize try block (catches any error)

/** returns text contents of file to console */
async function cat(path) {
  try {
    let contents = await fsP.readFile(path, "utf8");
    console.log("path: ", contents);
  } catch (err) {
    console.log('error caught');
    process.exit(1);
  }
}

cat(process.argv[2]);