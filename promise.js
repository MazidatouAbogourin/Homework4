//promise any
const pokename = ["pikachu", "charizard", "bulbasaur"];
const pokemonPromises = pokename.map((name) =>
  fetch(`https://pokeapi.co/api/v2/pokemon-species/${name}`).then((res) => {
    return res.json();
  })
);
console.log("Pomise.Any");
Promise.any(pokemonPromises).then((data) => {
  console.log("promise " + data.name);
});

console.log("Pomise.Race");
Promise.race([...pokemonPromises, Promise.reject(555)]).then((data) => {
  console.log("inside race " + data.name);
});

async function getData(url) {
  const data = await fetch(url);
  const input = await data.json();
  return input;
}

let promise1 = getData("https://pokeapi.co/api/v2/pokemon-species/aegislash");
let promise2 = getData("https://pokeapi.co/api/v2/ability/battle-armor");
let promise3 = getData("https://pokeapi.co/api/v2/pokemon/ditto");

console.log("Pomise.All");
//Promise All
Promise.all([promise1, promise2, promise3]).then(function (data) {
  data.forEach((c, i) => console.log(i + " " + c.name));
});
Promise.all([promise1, promise2, promise3, Promise.reject(555)]).catch((e) =>
  console.log(e)
);

//Promise All Settled
Promise.allSettled([promise1, promise2, promise3, Promise.reject(555)]).then(
  (d) => console.log(d)
);
