// for loop

for (var i = 0; i < variable.length; i++) {}

var heading = document.querySelector("h3");

heading.innerHTML = "Updated heading";

createdHtml += `
    <div> 
    <h5> Name = ${cats[i].name} </h5>
    <p> Age = ${catAge} </p>
    </div>
    `;

    function test()

    test()

// Fetch and Display API

//     const url =
//   "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=dc91efd8ac4c40789bf18e6e5ac0b487";

// var htmlHere = document.querySelector(".gameResults");

// async function getGames() {
//   // fetch
//   const response = await fetch(url);
//   const results = await response.json();
//   const games = results.results;

//   htmlHere.innerHTML = "";

//   for (let i = 0; i < games.length; i++) {
//     if (i === 8) {
//       break;
//     }

//     htmlHere.innerHTML += `<div class="aGame"> <h3> ${games[i].name} </h3> Rating - ${games[i].rating} <br> Tags - ${games[i].tags.length} </div>`;
//   }
// }

// getGames();