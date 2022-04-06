// API calls to get information and market data on the 3 largest Crypto currencies, free api from coinmarketcap.com
// https://pro-api.coinmarketcap.com/v2/cryptocurrency/info?symbol=BTC,ETH,BNB&CMC_PRO_API_KEY=d66c41ad-f344-4366-a1ee-5118949049fd
// https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest?symbol=BTC,ETH,BNB&CMC_PRO_API_KEY=d66c41ad-f344-4366-a1ee-5118949049fd

const urlInfo =
  "https://pro-api.coinmarketcap.com/v2/cryptocurrency/info?symbol=BTC,ETH,BNB&CMC_PRO_API_KEY=d66c41ad-f344-4366-a1ee-5118949049fd";
const urlData =
  "https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest?symbol=BTC,ETH,BNB&CMC_PRO_API_KEY=d66c41ad-f344-4366-a1ee-5118949049fd";

async function getData() {
  // fetch
  const responseData = await fetch(urlData);
  const resultsData = await responseData.json();
}

getData();

async function getInfo() {
  // fetch
  const responseInfo = await fetch(urlInfo);
  const resultsInfo = await responseInfo.json();
  const cryptoCoin = resultsInfo.data;

  for (let i = 0; i < cryptoCoin.length; i++) {
    console.log(cryptoCoin[i].name);

    // htmlHere.innerHTML += `<div class="aGame"> <h3> ${cryptoCoin[i].name} </h3> Rating - ${games[i].rating} <br> Tags - ${games[i].tags.length} </div>`;
  }
}

getInfo();
