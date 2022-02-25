const url = "https://eth-mainnet.alchemyapi.io/v2/AZL1qUMyWcVaiO3Z5w8nEYMdz_pStz-o";

// Using web3js
const web3 = new Web3(url);

// Using ethers.js
const provider = new ethers.providers.JsonRpcProvider(url);

// <button class="enableEthereumButton">Enable Ethereum</button>

const ethereumButton = document.querySelector(".enableEthereumButton");

ethereumButton.addEventListener("click", () => {
  //Will Start the metamask extension
  ethereum.request({ method: "eth_requestAccounts" });
});
