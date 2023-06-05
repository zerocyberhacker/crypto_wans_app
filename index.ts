import * as crypto from "crypto";

const plaintext: string = "route 53";
const hashAlgorithm: string = "sha256";
const hashEncoding: BufferEncoding = "hex"; // You can choose other encodings such as base64 or utf8
const hash: string = crypto.createHash(hashAlgorithm).update(plaintext).digest(hashEncoding);

console.log("WANS -> Wallet Address Name Service")
console.log("The message             : "+plaintext);
console.log("The sha256 hash result  : "+hash);

const targetHash = 'b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9';

if (hash === targetHash) {
    console.log('Match found!');
} else {
    console.log('No match found.');
}


