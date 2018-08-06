$(document).ready(function (){
});

function searchRepositories() {
  const req = newXMLHttpRequest();
  req.addEventListener("load", displayResults);
  req.open("GET", `https://api.github.com/search/repositories?q=${searchTerms}`);
}