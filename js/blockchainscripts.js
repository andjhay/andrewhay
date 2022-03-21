const web3Installed = document.querySelector(".web3-compatible");
const ethereumButton = document.querySelector(".enable-ethereum-button");
const showAccount = document.querySelector(".show-account");
const showChainId = document.querySelector(".show-chain-id");

if (typeof window.ethereum !== "undefined") {
  console.log("MetaMask is installed!");
  web3Installed.innerHTML = `<p> Web3 is installed </p>`;
}

ethereumButton.addEventListener("click", () => {
  getAccount();
  getChain();
});

async function getAccount() {
  const accounts = await ethereum.request({ method: "eth_requestAccounts" });
  const account = accounts[0];
  showAccount.innerHTML = account;
}

async function getChain() {
  const chainId = await ethereum.request({ method: "eth_chainId" });
  console.log(chainId);
  showChainId.innerHTML = chainId;
}