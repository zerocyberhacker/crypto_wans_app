/** @format */

import * as crypto from "crypto";

const plaintext: string = `admin`;
const hashAlgorithm: string = "sha256";
const hashEncoding: BufferEncoding = "hex"; // You can choose other encodings such as base64 or utf8
const hash: string = crypto
  .createHash(hashAlgorithm)
  .update(plaintext)
  .digest(hashEncoding);

console.log("The message             : " + plaintext);
console.log("The private key result  : " + hash);
