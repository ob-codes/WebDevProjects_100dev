//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

document.querySelector('button').addEventListener('click', getFetch);

function getFetch(){
  let inputField = document.querySelector('input');
  let choiceArray = inputField.value.split(" ");

  console.log(choiceArray);
  
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${choiceArray[0]}`)
  .then(res => res.json())
  .then(data => {
    console.log(data);    
    
    let choiceString = choiceArray.join(" ");
    console.log(choiceString);

    for (let i = 0; i < data.drinks.length; i++) {
      if(data.drinks[i].strDrink.toLowerCase() === choiceString.toLowerCase())
      {
        document.querySelector('h2').innerText = data.drinks[i].strDrink;
        document.querySelector('h3').innerText = data.drinks[i].strInstructions;
        document.querySelector('img').src = data.drinks[i].strDrinkThumb;
      }     
    }
  })
  .catch(err => {
    console.log(`error ${err}`);
  })
}
