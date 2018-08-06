$(document).ready(function (){
});

function searchRepositories() {
  const req = newXMLHttpRequest();
  var searchTerms = document.getElementById("searchTerms").value;
  req.addEventListener("load", displayResults);
  req.open("GET", `https://api.github.com/search/repositories?q=${searchTerms}`);
  req.send();
}

function displayResults(event, data) {
  const repos = JSON.parse(this.responseText);
  const resultsTemplate = Handlebars.compile(document.getElementById("results-template").innerHTML);
  const repoList = resultsTemplate(repos);
  document.getElementById("")
}