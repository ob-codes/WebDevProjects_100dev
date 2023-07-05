//The user will enter a date. Use that date to get the NASA picture of the day from 
//xssxxthat date! https://api.nasa.gov/

document.querySelector("input").type = "date";
document.querySelector("img").style.width = "600px";
      
document.querySelector("button").addEventListener("click", getFetch);

function getFetch() {
  const choice = document.querySelector("input").value ;
  let url = `https://api.nasa.gov/planetary/apod?api_key=wcMZzz5rkEcPCa03VMivC5VwJse6fNbT4ORPsfKw&date=${choice}`;

  fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data);

      document.querySelector("img").src = data.hdurl;
      document.querySelector("h3").innerText = data.explanation;
    })
    .catch(err => {
      console.log(`err: ${err}`);
    })
}
