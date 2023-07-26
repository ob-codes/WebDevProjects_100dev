//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.querySelector("button").addEventListener("click", getFetch);

function getFetch() {
  const choice = document.querySelector("input").value;
  console.log(choice);
  let url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${choice}`;

  fetch(url)
    .then(res => res.json())
    .then(data =>{
      console.log(data);

      document.querySelector("h2").innerText = data.drinks[0].strDrink;
      document.querySelector("img").src = data.drinks[0].strDrinkThumb;
      document.querySelector("img").style.width = "300px";
      document.querySelector("h3").innerText = data.drinks[0].strInstructions;
    })
    .catch(err => {
      console.log(`err : ${err}`);
    })
}