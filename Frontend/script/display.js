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
    var x = document.getElementById("latitude").value;
    var y = document.getElementById("longitude").value;
    var requestURL = 'https://locatolocato.pythonanywhere.com/forward/' + x + ',' + y;
    getaddress(requestURL)
}
function getReverseInput() {
    var x = document.getElementById("locato").value;
    var requestURL = 'https://locatolocato.pythonanywhere.com/reverse/' + x ;

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
