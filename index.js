var operator = prompt("Pick your operator(+,-,*,/):");
var num1 = parseInt(prompt("Number 1:"));
var num2 = parseInt(prompt("Number 2:"));

if (operator == "+") {
  var result = num1 + num2;
  var displayResult = "The result is:" +"\n"+ result;
  confirm(displayResult);
} else if (operator == "-") {
    var result = num1 - num2;
    var displayResult = "The result is:" +"\n"+ result;
    confirm(displayResult);
} else if (operator == "*") {
    var result = num1 * num2;
    var displayResult = "The result is:" +"\n"+ result;
    confirm(displayResult);
} else if (operator == "/") {
    var result = num1 / num2;
    var displayResult = "The result is:" +"\n"+ result;
    confirm(displayResult);
}
