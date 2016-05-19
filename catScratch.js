var catFood = document.getElementById('catFood');
catFood.innerHTML = '<h1>Cat Food</h1>';
var catRequest = new XMLHttpRequest();
catRequest.addEventListener("load", loadFood);
catRequest.open("GET", "cat.json");
catRequest.send();

function loadFood() {
  var data = JSON.parse(this.responseText); //the string of json returned
  console.log("data", data);
  catsFood(data.brands);
}

function catsFood(data){
  var matter = '';
  for (var i = 0; i<data.length; i++) {
    var v = data[i];
    console.log("v brands", v);
    matter  +=  '<div class = card>' + '<p class = "name">' + v.name + '</p>';// + '<p>' + v.types[i].type + '</P>' + '<p>' + v.types[i].volumes[i].name + '</p>' + '<p>' + v.types[i].volumes[i].price + '</p>';
    for (var j=0; j < v.types.length; j++) {
      matter += '<p class = "type">' + v.types[j].type + '</P>';
      for (var k=0; k < v.types.length; k++) {
      matter += '<p class = "volume">' + v.types[j].volumes[k].name + '</P>'  + '<p class = "vol">' + v.types[j].volumes[k].volume + '</p>' + '<p class = "price">' + v.types[j].volumes[k].price + '</P>';
      }
    }
    matter += '</div>';
  }

 catFood.innerHTML += matter;
}

