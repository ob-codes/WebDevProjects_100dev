//Get a dog photo from the dog.ceo api and place the photo in the DOM

fetchImage();
/*
function fetchImage() {
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
*/
async function fetchImage() {
  const imgUrl = `https://dog.ceo/api/breeds/image/random`;
  try {
    const res = await fetch(imgUrl);
    const data = await res.json(); 

    console.log(data);  
    document.querySelector("#dog-1").src = data.message;
    document.querySelector("#dog-2").src = data.message;
    document.querySelector("#dog-3").src = data.message;
  } 
  catch (error) {
    console.log(error);
  }
}