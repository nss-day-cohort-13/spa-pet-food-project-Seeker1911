var dogFood = document.getElementById('dogFood');
var request = new XMLHttpRequest();
request.addEventListener("load", loadFood);
request.open("GET", "brands.json");
request.send();

function loadFood() {
  var data = JSON.parse(this.responseText); //the string of json returned
  console.log("data", data);
  printFood(data.brands);
}

function printFood(data){
  for (var i = 0; i<data.length; i++) {
    var v = data[i];
    console.log("v brands", v);
    dogFood.innerHTML += v.name;
}
}

