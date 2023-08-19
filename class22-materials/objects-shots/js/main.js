//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
getFetch();

function getFetch() {
  const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita";
  
  fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data.Drinks[0]);
    })
    .catch(err => {
      console.log(err);
    })
}