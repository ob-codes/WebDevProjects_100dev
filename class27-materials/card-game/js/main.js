//Example fetch using pokemonapi.co

if (!localStorage.getItem("userDeckID"))
  localStorage.setItem("userDeckID", 0); 

if (!localStorage.getItem("botDeckID"))
  localStorage.setItem("botDeckID", 0); 

if (!localStorage.getItem("userCard"))
  localStorage.setItem("userCard", 0); 

if (!localStorage.getItem("botCard"))
  localStorage.setItem("botCard", 0);

document.getElementById("btn1").addEventListener("click", getDeck);
document.getElementById("btn2").addEventListener("click", drawCard);
document.getElementById("btn3").addEventListener("click", checkWin);

function getDeck() {
  document.querySelector("h3").innerText = "Loading...";

  getDeckForUser();
  getDeckForBot();
}

function drawCard() {
  document.querySelector("h3").innerText = "Drawing...";

  drawCardForUser();
  drawCardForBot();
}

function checkWin(){
  let usrChoice = Number(localStorage.getItem("userCard"));
  let botChoice = Number(localStorage.getItem("botCard"));

  if (usrChoice === botChoice) {
    document.querySelector("h3").innerText = "WARRRRRRRRR!!!";

    drawCard();
    drawCard();
    drawCard();
    drawCard();
  }
  else if (usrChoice > botChoice) {
    document.querySelector("h3").innerText = "You Won";
  }
  else if (usrChoice < botChoice) {
    document.querySelector("h3").innerText = "You Lost";
  }
}

function getDeckForUser(){
  const url = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";
  
  fetch(url)
  .then(res => res.json())
  .then(data => {
    console.log(data);
    
    localStorage.setItem("userDeckID", data.deck_id);
    userDeckID = data.deck_id;
  })
  .catch(err => {
    console.log(`err : ${err}`);
  });
}

function getDeckForBot(){
  const url = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";
  
  fetch(url)
  .then(res => res.json())
  .then(data => {
    console.log(data);
    
    localStorage.setItem("botDeckID", data.deck_id);
    botDeckID = data.deck_id;
  })
  .catch(err => {
    console.log(`err : ${err}`);
  });
}

function drawCardForUser(){
  const url = `https://deckofcardsapi.com/api/deck/${userDeckID}/draw/?count=1`;

  fetch(url)
  .then(res => res.json())
  .then(data => {
    document.getElementById("userCard").src = data.cards[0].image;
    localStorage.setItem("userCard", convertToNum(data.cards[0].value));    
  })
  .catch(err => {
    console.log(`err : ${err}`);
  });
}

function drawCardForBot(){
  const url = `https://deckofcardsapi.com/api/deck/${botDeckID}/draw/?count=1`;

  fetch(url)
  .then(res => res.json())
  .then(data => {
    document.getElementById("botCard").src = data.cards[0].image;
    localStorage.setItem("botCard", convertToNum(data.cards[0].value));
  })
  .catch(err => {
    console.log(`err : ${err}`);
  });
}

function convertToNum(value){
  let numberValue = 0;
  
  switch (value) {
    case "ACE":
      numberValue = 14;
      break;
    
    case "KING":
      numberValue = 13;
      break;
    
    case "QUEEN":
      numberValue = 12;
      break;

    case "JACK":
      numberValue = 11;
      break;

    default:
      numberValue = Number(value);
      break;
  }

  return numberValue;
}