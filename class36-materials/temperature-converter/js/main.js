document.querySelector("button").addEventListener("click", convert)

function convert() {
  const input = document.querySelector("input").value ;

  document.querySelector("h2").innerText = (input *9/5) +32;
}