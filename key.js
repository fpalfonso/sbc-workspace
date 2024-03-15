const bs58 = require('bs58');
const fs = require('fs');
b = bs58.decode('2W2SuDHbh2vatP1s1SFdvWN26eRZTDSNkTTKPxQAkLsiX1CqM6BquhEKL61ZCo7v6vofDipA1FqjhF6xjqc3qfU9');
j = new Uint8Array(b.buffer, b.byteOffset, b.byteLength / Uint8Array.BYTES_PER_ELEMENT);
fs.writeFileSync('key.json', `[${j}]`);
