function getaddress(requestURL) {
    var header = document.querySelector('header');
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = function() {
      var json = request.response;
      populateHeader(json,header);
        }

}
function getCoord(requestURL) {
    var header = document.querySelector('header');
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = function() {
      var json = request.response;
      populateHeaderWithXY(json,header);
        }

}
function getInput() {
    var lati = document.getElementById("latitude").value;
    var longi = document.getElementById("longitude").value;
    var requestURL = 'https://locatolocato.pythonanywhere.com/forward/' + lati + ',' + longi;
    getaddress(requestURL)
}
function getReverseInput() {
    var locato = document.getElementById("locato").value;
    var requestURL = 'https://locatolocato.pythonanywhere.com/reverse/' + locato ;

    getCoord(requestURL)
}
function populateHeader(jsonObj,header) {
    var myH1 = document.createElement('h1');

    myH1.textContent = jsonObj['address'];
    header.appendChild(myH1);
}
function populateHeaderWithXY(jsonObj,header) {
    var myH1 = document.createElement('h1');
    myH1.textContent = jsonObj['x'].toString()+","+jsonObj['y'].toString();
    header.appendChild(myH1);
}
function RedirectionFromDropMenu()
{
  var SelectedChoice = document.getElementById('WhatToDo');
  if(SelectedChoice.value == 0){
    alert("Please select one option")
  }
  if(SelectedChoice.value == 1){
     window.location="locato2coord.html";
  }
  if(SelectedChoice.value == 2){
     window.location="coord2locato.html";
  }

}
