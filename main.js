var equation = "";
var input = document.getElementById("input-bar");

var keys = document.querySelectorAll(".calculator-container div");
var operator = document.querySelectorAll(".operator");
var clear = document.querySelector(".clear");
var equals = document.querySelector(".eval");


for (let i = 0; i < keys.length; i ++) {
  keys[i].addEventListener("click", function(event) {
    if (keys[i].innerText < 10 || keys[i].innerText == ".") {
      equation += event.target.getAttribute("id");
      input.value = equation;
    }
  })
}

for (let i = 0; i < operator.length; i ++) {
  operator[i].addEventListener("click", function(event) {
    if (operator[i].getAttribute("id") == equation.slice(-1)) {
      return;
    } else {
      equation += operator[i].getAttribute("id");
      input.value = equation;
    }
  })
}

clear.addEventListener("click", clearAll);

function clearAll(event) {
  input.value = "";
  equation = "";
}

equals.addEventListener("click", getResult);

function getResult(event) {
  var result = eval(equation);
  input.value = result;
}
