document.querySelector("button").addEventListener("click", getFetch);

if(localStorage.getItem("bookName") != null)
  document.querySelector("h2").innerText = localStorage.getItem("bookName");

function getFetch(){
  let isbn = document.querySelector("input").value;
  const url = `https://openlibrary.org/isbn/${isbn}.json`;
  fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data);

      let names = localStorage.getItem("bookName");
      
      if(names != null)
        names += data.title + ";";
      else 
        names = data.title + ";";

      localStorage.setItem("bookName", names);

      document.querySelector("h2").innerText = localStorage.getItem("bookName");
    })
    .catch(err => {
      console.log(`err : ${err}`);
    })
}