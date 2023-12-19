import Web3, { net } from "web3";
import ABI from "../../contracts/abi.json";
import { ethers } from "ethers";

const isBrowser = () => typeof window !== "undefined"; //The approach recommended by Next.js
const { ethereum } = isBrowser();
if (ethereum) {
  isBrowser().web3 = new Web3(ethereum);
  isBrowser().web3 = new Web3(isBrowser().web3.currentProvider);
}
const CONTRACT_ADDRESSES = {
  1442: "0x7ED61251F9e8f088e00ceE73CC086dC3c123e2F5", //poylgon zkevm
  44787: "0xaA366318f39E92b479520D83d918DE57a156eB82", // celo
  5001: "0xa0b0A5f6FF1FE8141F81061cB34B6218F0591C50", // mantle
  80001: "0x17020d83B5EF0464FeBe3CB7B0C717B4e4FcFE3a", //poylgon mumbai
  534351: "0xD17ce37D70e499681E2C2a5f574DE1020a7a8a1F", // scroll
  59140: "0x9058F40Ed7d473655c219B79EbECe9e244374FDC", //linea
  84531: "0x5A7fA4de6895f4452f951Aa8327BB82ee7D2E4b5", // base
  421613: "0xa0b0A5f6FF1FE8141F81061cB34B6218F0591C50", //arbitrium
  314159: "0x7ED61251F9e8f088e00ceE73CC086dC3c123e2F5", // filecoin
  // xdc
};

export const registerusr = async ({ playeradd, playername }) => {
  console.log("initializing contract");
  const provider =
    window.ethereum != null
      ? new ethers.providers.Web3Provider(window.ethereum)
      : ethers.providers.getDefaultProvider();
  const signer = provider.getSigner();
  const network = await provider.getNetwork();
  console.log("network", network);
  const contractAddress = CONTRACT_ADDRESSES[network.chainId];

  const Role = new ethers.Contract(contractAddress, ABI, signer);
  const tokenId = await Role.registerPlayer(playeradd, playername);
  return tokenId;
};

export const isusrregistered = async ({ playeradd }) => {
  console.log("initializing contract");
  const provider =
    window.ethereum != null
      ? new ethers.providers.Web3Provider(window.ethereum)
      : ethers.providers.getDefaultProvider();
  const signer = provider.getSigner();
  const network = await provider.getNetwork();
  console.log("network", network.chainId);
  const contractAddress = CONTRACT_ADDRESSES[network.chainId];
  console.log("contract add", contractAddress);
  const Role = new ethers.Contract(contractAddress, ABI, signer);
  const tokenId = await Role.isPlayerRegistered(playeradd);
  return tokenId;
};

export const addgunassets = async ({
  gunid,
  name,
  imghash,
  price,
  rateoffire,
  gunrange,
}) => {
  const provider =
    window.ethereum != null
      ? new ethers.providers.Web3Provider(window.ethereum)
      : ethers.providers.getDefaultProvider();
  const signer = provider.getSigner();
  const network = await provider.getNetwork();
  const contractAddress = CONTRACT_ADDRESSES[network.chainId];

  const Role = new ethers.Contract(contractAddress, ABI, signer);
  const tokenId = await Role.addGun(
    gunid,
    name,
    imghash,
    price,
    rateoffire,
    gunrange
  );
  return tokenId;
};

export const addcharassets = async ({
  charid,
  name,
  imghash,
  price,
  strength,
  armorpower,
}) => {
  const provider =
    window.ethereum != null
      ? new ethers.providers.Web3Provider(window.ethereum)
      : ethers.providers.getDefaultProvider();
  const signer = provider.getSigner();
  const network = await provider.getNetwork();
  const contractAddress = CONTRACT_ADDRESSES[network.chainId];

  const Role = new ethers.Contract(contractAddress, ABI, signer);
  const tokenId = await Role.addCharacter(
    charid,
    name,
    imghash,
    price,
    strength,
    armorpower
  );
  return tokenId;
};

export const addvechileassets = async ({
  vehicleId,
  name,
  imghash,
  price,
  range,
  speed,
}) => {
  const provider =
    window.ethereum != null
      ? new ethers.providers.Web3Provider(window.ethereum)
      : ethers.providers.getDefaultProvider();
  const signer = provider.getSigner();
  const network = await provider.getNetwork();
  const contractAddress = CONTRACT_ADDRESSES[network.chainId];

  const Role = new ethers.Contract(contractAddress, ABI, signer);
  const tokenId = await Role.addVehicle(
    vehicleId,
    name,
    imghash,
    price,
    range,
    speed
  );
  return tokenId;
};

export const startgame = async ({ gameid, playerNames }) => {
  const provider =
    window.ethereum != null
      ? new ethers.providers.Web3Provider(window.ethereum)
      : ethers.providers.getDefaultProvider();
  const signer = provider.getSigner();
  const network = await provider.getNetwork();
  const contractAddress = CONTRACT_ADDRESSES[network.chainId];

  const Role = new ethers.Contract(contractAddress, ABI, signer);
  const tokenId = await Role.startGame(gameid, playerNames);
  return tokenId;
};

export const getPlayerData = async ({ playerAddress }) => {
  const provider =
    window.ethereum != null
      ? new ethers.providers.Web3Provider(window.ethereum)
      : ethers.providers.getDefaultProvider();
  const signer = provider.getSigner();
  const network = await provider.getNetwork();
  const contractAddress = CONTRACT_ADDRESSES[network.chainId];

  const Role = new ethers.Contract(contractAddress, ABI, signer);
  const tokenId = await Role.getPlayerData(playerAddress);
  return tokenId;
};

export const endGame = async ({ gameid, winner, highestkills, imghash }) => {
  const provider =
    window.ethereum != null
      ? new ethers.providers.Web3Provider(window.ethereum)
      : ethers.providers.getDefaultProvider();
  const signer = provider.getSigner();
  const network = await provider.getNetwork();
  const contractAddress = CONTRACT_ADDRESSES[network.chainId];

  const Role = new ethers.Contract(contractAddress, ABI, signer);
  const tokenId = await Role.endGame(gameid, winner, highestkills, imghash);
  return tokenId;
};

export const getPlayerAssets = async ({ playerAddress }) => {
  const provider =
    window.ethereum != null
      ? new ethers.providers.Web3Provider(window.ethereum)
      : ethers.providers.getDefaultProvider();
  const signer = provider.getSigner();
  const network = await provider.getNetwork();
  const contractAddress = CONTRACT_ADDRESSES[network.chainId];

  const Role = new ethers.Contract(contractAddress, ABI, signer);
  const tokenId = await Role.getPlayerAssets(playerAddress);
  return tokenId;
};

export const updatePlayerProfile = async ({ playerAddress }) => {
  const provider =
    window.ethereum != null
      ? new ethers.providers.Web3Provider(window.ethereum)
      : ethers.providers.getDefaultProvider();
  const signer = provider.getSigner();
  const network = await provider.getNetwork();
  const contractAddress = CONTRACT_ADDRESSES[network.chainId];

  const Role = new ethers.Contract(contractAddress, ABI, signer);
  const tokenId = await Role.updatePlayerProfile(playerAddress);
  return tokenId;
};

export const getPlayerNFTs = async ({ playerAddress }) => {
  const provider =
    window.ethereum != null
      ? new ethers.providers.Web3Provider(window.ethereum)
      : ethers.providers.getDefaultProvider();
  const signer = provider.getSigner();
  const network = await provider.getNetwork();
  const contractAddress = CONTRACT_ADDRESSES[network.chainId];

  const Role = new ethers.Contract(contractAddress, ABI, signer);
  const tokenId = await Role.getPlayerNFTs(playerAddress);
  return tokenId;
};

export const buyasset = async ({ playeradd, assetid, assettype, price }) => {
  const provider =
    window.ethereum != null
      ? new ethers.providers.Web3Provider(window.ethereum)
      : ethers.providers.getDefaultProvider();
  const signer = provider.getSigner();
  const network = await provider.getNetwork();
  const contractAddress = CONTRACT_ADDRESSES[network.chainId];

  const Role = new ethers.Contract(contractAddress, ABI, signer);
  const tokenId = await Role.buyAsset(playeradd, assetid, assettype, {
    value: price,
  });
  console.log(tokenId);
  return tokenId;
};
