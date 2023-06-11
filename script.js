let firstNumber;
let operator;
let secondNumber;


const add = (firstNumber, secondNumber) => {
	return firstNumber + secondNumber;
};

const subtract = (firstNumber, secondNumber) => {
	return firstNumber-secondNumber;
};

const multiply = (firstNumber, secondNumber) => {
    return firstNumber * secondNumber;
  };

const divide = (firstNumber, secondNumber) => {
    return firstNumber / secondNumber;
}

function operate(firstNumber, operator, secondNumber) {
    switch(operator) {
        case "+":
            add();
            break;
        case "-":
            subtract();
            break;
        case "*":
            multiply();
            break;
        case "/":
            divide();
            break;
        
        default:
            alert("Something is wrong")
    }
}