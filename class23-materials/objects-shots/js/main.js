//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

document.querySelector("button").addEventListener('click', getFetch);

function getFetch(){
  const item = document.querySelector("input").value;
  const url =`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${item}`

  fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data);

      document.querySelector("h2").innerText = data.drinks[0].strDrink;
      document.querySelector("img").src = data.drinks[0].strDrinkThumb;
      document.querySelector("img").style.width = "300px";
      document.querySelector("h3").innerText = data.drinks[0].strInstructions;
      document.querySelector("h3").style.width = "60%";
      document.querySelector("h3").style.textAlign = "center";
    })
    .catch(err => {
      console.log(`err: ${err}`);
    })
}