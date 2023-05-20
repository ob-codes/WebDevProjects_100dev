//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
document.querySelector('button').addEventListener('click', getFetch);

function getFetch(){
  const inputField = document.querySelector('input').value;
  //const url = `https://api.nasa.gov/planetary/apod?date=${inputField}`;
  const url = `https://api.nasa.gov/planetary/apod?date=${inputField}&api_key=ykOd0vTZ7OnoVeAmAMePt2qkFzC09RHn40R5cvnG`;

  fetch(url)
  .then(res => res.json())
  .then(data => {
    console.log(data);
    document.querySelector("h2").innerText = data.title;
    document.querySelector("img").src = data.url;
    document.querySelector("h3").innerText = data.explanation;

  })
  .catch(err => {
    console.log(`err : ${err}`);
  });  
}