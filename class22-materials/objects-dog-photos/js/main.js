//Get a dog photo from the dog.ceo api and place the photo in the DOM

run();

function run() {
  const imgUrl = `https://dog.ceo/api/breeds/image/random`;
  fetch(imgUrl)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      
      document.querySelector("#dog-1").src = data.message;
      document.querySelector("#dog-2").src = data.message;
      document.querySelector("#dog-3").src = data.message;
    })
    .catch(err => {
      console.log(err);
    });
}

/*
async function run(params) {
  const imgUrl = `https://dog.ceo/api/breeds/image/random`;

  const data = await fetch(imgUrl);
  document.querySelector("#dog-1").src = await data.message;
  document.querySelector("#dog-2").src = data.json().message;
  document.querySelector("#dog-3").src = data.json().message;
}
*/