//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value;
  const url = `https://api.nasa.gov/planetary/apod?api_key=ykOd0vTZ7OnoVeAmAMePt2qkFzC09RHn40R5cvnG&date=${choice}`;

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data);
        if (data.media_type === "image"){          
          document.querySelector("img").style.display = "block";  
          document.querySelector("img").src = data.hdurl; 
          document.querySelector("iframe").style.display = "none";       
        }
        else if (data.media_type === "video"){
          document.querySelector("iframe").style.display = "block";  
          document.querySelector("iframe").src = data.url;
          document.querySelector("img").style.display = "none";
        } 
        document.querySelector("h2").innerText = data.title;
        document.querySelector("h3").innerText = data.explanation;
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

