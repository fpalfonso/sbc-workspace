import { createMetaplexInstance } from "./01_metaplex.js";

async function main() {
    const metaplex = createMetaplexInstance();
    const { nft } = await metaplex.nfts().create({
        uri: "https://arweave.net/_ftEvIs29bxaWUW94R9BTRk7dqR7eVCW-vV5bNzrVv4",
        name: "Meerkat the NFT0x1",
        sellerFreeBasisPoints: 250
    });
    console.log('nft', nft);
}

main();