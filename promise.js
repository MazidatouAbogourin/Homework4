//promise any
const pokename = ["pikachu", "charizard", "bulbasaur"];
const pokemonPromises = pokename.map((name) =>
  fetch(`https://pokeapi.co/api/v2/pokemon-species/${name}`).then((res) => {
    return res.json();
  })
);

Promise.any(pokemonPromises).then((data) => {
  console.log("Inside promise.any " + data.name);
});

Promise.race([...pokemonPromises, Promise.reject(555)]).then((data) => {
  console.log("inside race " + data.name);
});

async function getData(url) {
  const data = await fetch(url);
  const input = await data.json();
  return input;
}

//Promise All
Promise.all(pokemonPromises).then(function (data) {
  data.forEach((c, i) => console.log(i + " " + c.name));
});
Promise.all([...pokemonPromises, Promise.reject(555)]).catch((e) =>
  console.log(e)
);

//Promise All Settled
Promise.allSettled([...pokemonPromises, Promise.reject(555)]).then((d) =>
  console.log(d)
);
