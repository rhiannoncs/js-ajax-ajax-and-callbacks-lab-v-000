$(document).ready(function (){
});

function searchRepositories() {
  const req = newXMLHttpRequest();
  var searchTerms = document.getElementById("search")
  req.addEventListener("load", displayResults);
  req.open("GET", `https://api.github.com/search/repositories?q=${searchTerms}`);
}