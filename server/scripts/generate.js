const secp = require("ethereum-cryptography/secp256k1");
const { keccak256 } = require("ethereum-cryptography/keccak");
const { toHex } = require("ethereum-cryptography/utils");

const privateKey = toHex(secp.secp256k1.utils.randomPrivateKey());
console.log("Private Key", privateKey);

const publicKey = toHex(secp.secp256k1.getPublicKey(privateKey)); 
console.log("Public key:", publicKey); 
console.log("Address:", publicKey.slice(-20), "\n");

// Signing
const uint8Array = Uint8Array.from([
    "25",
    "17042de8bb5ae206aac69b12f51208844d4957b1",
]);

const signature = secp.secp256k1.signSync(
    keccak256(uint8Array),
    toHex(keccak256(privateKey))
);
console.log("Signature using uint8Array", toHex(signature));

// Signing using bytes
const hashMsg = toHex(keccak256(uint8Array));
console.log("Hashed Message", hashMsg);

/*const signature1 = secp.secp256k1(hashMsg, privateKey);
console.log("Signature using hex", toHex(signature1));
// conclusion = No matter what you use uint8Array or hex signature is gonna be a same









/* this is the initial code
//Generating a random PrivateKey
const privateKey = secp.secp256k1.utils.randomPrivateKey();
console.log("Private Key:", toHex(privateKey));

//Getting a PublicKey from PrivateKey
const publicKey = secp.secp256k1.getPublicKey(privateKey);
console.log("Public Key:", toHex(publicKey));

//Generating an Address getting the last 20bytes of the keccak has of the PublicKey
function getAddress(publicKey){
    // the first byte (2 first digits) indicates wether this is in compressed form or not
    return keccak256(publicKey.slice(1)).slice(-20);
}
console.log("Address: ", toHex(getAddress(publicKey)),"\n");*/
