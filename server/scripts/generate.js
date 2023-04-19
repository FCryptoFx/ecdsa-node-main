const secp = require ("ethereum-cryptography/secp256k1");
const { keccak256 } = require ("ethereum-cryptography/keccak");
const { toHex } = require ("ethereum-cryptography/utils");

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
console.log("Address: ", toHex(getAddress(publicKey)),"\n");
