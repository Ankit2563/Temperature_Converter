/** @format */

let celsius = document.getElementById("celsius");
let fahrenheit = document.getElementById("fahrenheit");
let kelvin = document.getElementById("kelvin");

function celToFar() {
  let output = (parseFloat(celsius.value) * 9) / 5 + 32;
  let output1 = parseFloat(celsius.value) + 273.15;
  fahrenheit.value = parseFloat(output.toFixed(2));
  kelvin.value = parseFloat(output1.toFixed(2));
}

function farToCel() {
  let output = ((parseFloat(fahrenheit.value) - 32) * 5) / 9;
  celsius.value = parseFloat(output.toFixed(2));
  let output1 = parseFloat(celsius.value) + 273.15;
  kelvin.value = parseFloat(output1.toFixed(2));

  console.log(output);
}
function celTokel() {
  let output = parseFloat(kelvin.value) - 273.15;
  celsius.value = parseFloat(output);
  let output1 = (parseFloat(celsius.value) * 9) / 5 + 32;
  fahrenheit.value = parseFloat(output1);

  console.log(output);
}
