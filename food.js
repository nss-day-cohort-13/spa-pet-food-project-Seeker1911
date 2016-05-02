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
    dogFood.innerHTML += '<p class = "name">' + v.name + '</p>';// + '<p>' + v.types[i].type + '</P>' + '<p>' + v.types[i].volumes[i].name + '</p>' + '<p>' + v.types[i].volumes[i].price + '</p>';
    for (var j=0; j < v.types.length; j++) {
      dogFood.innerHTML += '<p class = "type">' + v.types[j].type + '</P>';
      for (var k=0; k < v.types.length; k++) {
        dogFood.innerHTML += '<p class = "volume">' + v.types[j].volumes[k].name + '</P>' +  '<p class = "price">' + v.types[j].volumes[k].price + '</P>';
      }
    }
  }
}


