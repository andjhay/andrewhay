if (typeof window.ethereum !== "undefined") {
  console.log("MetaMask is installed!");
}

const ethereumButton = document.querySelector(".enableEthereumButton");
const showAccount = document.querySelector(".showAccount");
const showBalance = document.querySelector(".showBalance");
var web3 = new Web3(Web3.currentProvider || "ws://localhost:8546");
var Eth = require("web3-eth");

console.log(web3);
console.log(Eth);

ethereumButton.addEventListener("click", () => {
  getAccount();
});

async function getAccount() {
  const accounts = await ethereum.request({ method: "eth_requestAccounts" });
  const account = accounts[0];
  showAccount.innerHTML = account;
  return account;
}
