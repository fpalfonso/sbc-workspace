import {
    toMetaplexFile
} from '@metaplex-foundation/js'
import fs from 'fs';
import { createMetaplexInstance } from './01_metaplex.js';

async function main () {
    const metaplex = createMetaplexInstance();
    const buffer = fs.readFileSync("./picture.jpg");
    const file = toMetaplexFile(buffer, "converted.jpg");

    const imageURL = await metaplex.storage().upload(file);
    console.log(imageURL);
}

main();