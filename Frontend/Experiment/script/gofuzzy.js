function MakeAMap(x,y) {
    var Coordinates = [x, y];
    var map = tomtom.L.map('map', {
key: 'mHZ3jce2dXHZv7VulmjvM6auHUIRYy8j',
basePath: '<.../sdk>',
center: Coordinates,
zoom: 15
});
var marker = tomtom.L.marker(Coordinates).addTo(map);
marker.bindPopup('<h3> YOUR LOCATO CORRESPONDS TO: </h3>').openPopup();

}

function getCoord(requestURL) {
    var header = document.querySelector('header');
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = function() {
      var json = request.response;
      var coords = (json.results[0].position);
      MakeAMap(coords.lat,coords.lon);
      getInput(coords.lat,coords.lon);
      // MakeAMap(json);
      //populateHeaderWithXY(json,header);
        }

}

function populateHeader(jsonObj,header) {
    var myH1 = document.createElement('h1');
    console.log(jsonObj);
    myH1.textContent = jsonObj['address'];
    header.appendChild(myH1);
}

function getInput(lati,longi) {

    var requestURL = 'https://locatolocato.pythonanywhere.com/forward/' + lati + ',' + longi;
    getaddress(requestURL)
}
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
function fuzzy() {
    var fuzzytext = document.getElementById("fuzzytext").value;
    var requestURL = 'https://api.tomtom.com/search/2/search/' + fuzzytext +  '.json?key=mHZ3jce2dXHZv7VulmjvM6auHUIRYy8j' ;

    getCoord(requestURL)
}