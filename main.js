let output = document.getElementById("out");

onload = function () {
  output.focus();
}

function display(num) {
  output.value += num;
}

function clearAll() {
  output.value = '';
}

function Delete() {
  output.value = output.value.slice(0,-1);
}

function result() {
  try {
    output.value = eval(output.value);
  } catch (err) {
    output.value = "Error";
}
}
