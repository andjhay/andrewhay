// export default const
// import const from "./const.js";

if (typeof window.ethereum !== "undefined") {
  console.log("MetaMask is installed!");
}

const ethereumButton = document.querySelector(".enable-eth-button");
const showAccount = document.querySelector(".show-account");
const showBalance = document.querySelector(".show-balance");

console.log(window.ethereum);

ethereumButton.addEventListener("click", () => {
  getAccount();
});

showAccount.innerHTML = `Account: </br> Chain: </br> Balance: `;

async function getAccount() {
  const accounts = await ethereum.request({ method: "eth_requestAccounts" });
  const chain = await ethereum.request({ method: "eth_chainId" });
  const account = accounts[0];
  let balance = await ethereum.request({
    method: "eth_getBalance",
    params: [account, "latest"],
  });
  const wei = parseInt(balance, 16);
  const chainBalance = wei / Math.pow(10, 18); // parse to ETH
  showAccount.innerHTML = `Account: ${account} </br> Chain: ${chain} </br> Balance: ${chainBalance}`;
}

let networkList = [
  {
    name: "Ethereum",
    id: "0x1",
  },
  {
    name: "BNB",
    id: "",
  },
  {
    name: "Polygon",
    id: "",
  },
  {
    name: "Bitcoin",
    id: "",
  },
  {
    name: "Solana",
    id: "",
  },
  {
    name: "Avalanche",
    id: "0xa86a",
  },
];

// function chainName(chainId) {}
