import nft from "../assets/pictures/nft.png";
import store from "../assets/pictures/shop.png";
import discord from "../assets/pictures/discord2.png";
import dao from "../assets/pictures/dao.png";

export const starterData = [
  {
    index: 1,
    title: "NFT Collection",
    img: nft,
    list: [
      "Design of an ERC-1155 NFT collection (multiple owners per NFT) based",
      "Deployment of audited smart contracts on a compatible EVM blockchain (Ethereum, Polygon, etc.).",
    ],
  },
  {
    index: 2,
    title: "NFT Mint Store",
    img: store,
    list: [
      "Development of a Web3 store/landing page on which your project will be explained.",
      "Each member of your community will be able to connect to it with his own wallet to buy (mint) one of the NFTs of your collection.",
    ],
  },
  {
    index: 3,
    title: "Discord with Web3 Space",
    img: discord,
    list: [
      "Setup of a public (if not existing) and private discord with all necessary Web3 tools to animate your community and get closer to your most active members.",
    ],
  },
  {
    index: 4,
    title: "Governance Space (Snapshot)",
    img: dao,
    list: [
      "Registration of your decentralized domain name (ENS).",
      "Creation of your decentralized governance space (Snapshot) where each NFT holder will be able to vote on various community proposals.",
    ],
  },
];
