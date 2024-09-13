let operation = prompt("Please choose the Operation you want to perform:" + "\n" +
"For Addition: +" + "\n" +
"For Subtraction: -" + "\n" +
"For Multiplication: *" + "\n" +
"For Division: /" );

let firstNumber = Number(prompt("Please enter the First Number"));
let secondNumber = Number(prompt("Please enter the Second Number"));

let add = firstNumber + secondNumber;
let sub = firstNumber - secondNumber;
let multi = firstNumber * secondNumber;
let divide = firstNumber / secondNumber;


if(operation == "+"){
    alert("Results of the Operation(" + operation + ") are: " + add )
}
else if(operation == "-"){
    alert("Results of the Operation(" + operation + ") are: " + sub)
}
else if(operation == "*"){
    alert("Results of the Operation(" + operation + ") are: " + multi)
}
else if(operation == "/"){
    alert("Results of the Operation(" + operation + ") are: " + divide)
}
else{
    alert("Invalid Operator")
}