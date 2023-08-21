
getFetch();

function getFetch() {
  const url = "https://dog.ceo/api/breeds/image/random";
  fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data);

      document.querySelector("img").src = data.message;
      document.querySelector("img").style.width = "600px";
    })
    .catch(err => {
      console.log(`err: ${err}`);
    });
}