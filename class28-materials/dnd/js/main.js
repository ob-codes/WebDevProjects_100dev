//Example fetch using DnD5eAPI - place subclasses in ul
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  //const url = `https://www.dnd5eapi.co/api/spells/acid-arrow/`
  const url = `https://www.dnd5eapi.co/api/spells/${choice}`

  while (document.querySelector("li"))
    document.querySelector("li").remove();

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data);
        
        document.querySelector("h2").innerText = data.name;
        document.querySelector("h3").innerText = data.classes[0].name;
        data.subclasses.forEach(element => {
            const li = document.createElement("li");
            li.textContent = element.name;
            document.querySelector("ul").appendChild(li); 
        });
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

