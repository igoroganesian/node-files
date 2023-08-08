"use strict";
const axios = require("axios");
const fsP = require('fs/promises');

/** returns text contents of file to console */
async function cat(path) {
  try {
    const contents = await fsP.readFile(path, "utf8");
    console.log("path: ", contents);
  } catch (err) {
    console.log(`error accessing ${path}`);
    process.exit(1);
  }
}

/** returns contents of URL to console as raw data */
//TODO: rename URL (suggests global)
async function webCat(URL) {
  try {
    const resp = await axios.get(URL);
    // const resp = await axios({URL}); ??
    console.log(resp.data);
  } catch (err) {
    console.log(`error accessing ${URL}`);
    process.exit(1);
  }
}

const path = process.argv[2];

let output = path.startsWith("http") ? webCat(path) : cat(path);
console.log("output: ", output);
// return output;
