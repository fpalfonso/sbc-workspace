import { createMetaplexInstance  } from "./01_metaplex.js";

async function main () {
    const metaplex = createMetaplexInstance();
    const metadata = {
        name: "Meerkat the NFT0x1",
        symbol: "MFT",
        image: "https://arweave.net/pNnnYv5HTnzHVvtUKe4-wkg5OYkOOfx9_BXErH8PjMw",
        attributes: [
            {
            trait_type: 'picture',
            value: 'meerkat',
            }
        ]
    }

    const result = await metaplex.nfts().uploadMetadata(metadata);
    console.log(result);
}

main();