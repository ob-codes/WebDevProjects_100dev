//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
function getFetch(){
  const date = document.querySelector("input").value;
  let url = `https://api.nasa.gov/planetary/apod?api_key=ykOd0vTZ7OnoVeAmAMePt2qkFzC09RHn40R5cvnG&date=${date}`;

  fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data);

      document.querySelector("img").src = data;
    })
    .catch(err => {
      console.log(`err: ${err}`);
    })
}