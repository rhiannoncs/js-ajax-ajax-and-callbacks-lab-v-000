$(document).ready(function (){
});

function searchRepositories() {
  const req = newXMLHttpRequest();
  var searchTerms = document.getElementById("searchTerms")
  req.addEventListener("load", displayResults);
  req.open("GET", `https://api.github.com/search/repositories?q=${searchTerms}`);
}