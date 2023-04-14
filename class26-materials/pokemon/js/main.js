//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  let pokemonIndex = 0;
  const choice = document.querySelector('input').value
  const url = 'https://pokeapi.co/api/v2/pokemon/'

  fetch(url)
  .then(res => res.json()) // parse response as JSON
  .then(data => {
    console.log(data.results);

    for (let i = 0; i < data.results.length; i++) {
      if (data.results[i].name === choice) {
        pokemonIndex = i;
        break;
      }        
    }
    document.querySelector("h2").innerText = data.results[pokemonIndex].name;
    document.querySelector("#first").src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`;
  })
  .catch(err => {
      console.log(`error ${err}`)
  });
}