document.getElementById('date').innerHTML = new Date().toDateString();
var obj = JSON.parse('{ "name":"John", "age":30, "city":"New York"}');
document.getElementById('name').innerHTML = obj.name;