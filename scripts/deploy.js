// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  const XRC721 = await ethers.getContractFactory("XRC721");
  const myNFT = await XRC721.deploy("FemzyToken", "FT");

  await myNFT.deployed();
  
  console.log("Token Successfully Deployed!");
  console.log("Token address:", myNFT.address);

  // and now lets mint token
  const newItemId = await myNFT.mintToken(deployer.address)

  console.log("NFT minted: ", newItemId)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
