import nft from "../assets/pictures/nft.png";
import store from "../assets/pictures/shop.png";
import discord from "../assets/pictures/discord2.png";
import dao from "../assets/pictures/dao.png";

export const starterData = [
  {
    index: 1,
    title: "Collection de NFTs",
    img: nft,
    list: [
      "Conception d'une collection de NFT de type ERC-1155 (plusieurs propriétaires par NFT) à partir de votre propre contenu ou création d'un design simple",
      "Déploiement de smart contracts audités sur une blockchain EVM compatible (Ethereum, Polygon, etc..)",
    ],
  },
  {
    index: 2,
    title: "Site Web3 pour vendre vos NFTs",
    img: store,
    list: [
      "Création d'un site Web3 de type store/landing page sur lequel sera présenté votre projet",
      "Chaque membre de votre communauté pourra s'y connecter avec son wallet afin d'y acheter (mint) un des NFTs de votre collection.",
    ],
  },
  {
    index: 3,
    title: "Discord avec Espace Web3",
    img: discord,
    list: [
      "Création d'un discord public (si non existant) et privé avec tous les outils Web3 nécessaires pour animer votre communauté et vous rapprocher de vos membres les plus engagés.",
    ],
  },
  {
    index: 4,
    title: "Espace Gouvernance (Snapshot)",
    img: dao,
    list: [
      "Acquisition de votre nom de domaine décentralisé (ENS).",
      "Création de votre espace de gouvernance décentralisé (Snapshot) sur lequel chaque détenteur du NFT pourra voter à différentes propositions communautaires.",
    ],
  },
];
