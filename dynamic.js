var main = document.getElementById("maindiv")
main.classList.add("maindiv");

fetch("resume.json")
.then(res=>res.json())
.then(made=>{
  console.log(made);
