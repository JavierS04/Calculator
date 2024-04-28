let firstNumber = 0;
let operator = "";
let secondNumber = 0;
let displayValue =0;
let number = 0;
let arr = [];

function add(num1,num2){
    return num1 + num2
}

function subtract(num1,num2){
    return num1 - num2
}

function multiply(num1,num2){
    return num1 * num2
}

function divide(num1,num2){
    return num1 / num2
}

function operate(firstNumber, operator, secondNumber){
    let answer = 0;
    if(operator == "+"){
        answer = add(firstNumber,secondNumber);
    }
    else if(operator == "-"){
        answer = subtract(firstNumber,secondNumber)
    }
    else if(operator == "*"){
        answer = multiply(firstNumber,secondNumber);
    }
    else if(operator == "/"){
        answer = divide(firstNumber,secondNumber)
    }
    else{
        return "hello"
    }
    return answer;
}



const numbers = document.querySelector(".numbers");
const button = document.querySelector(".buttons-holder");
let numberHolder = 0;
let numberHolder2 = 0

button.addEventListener("click", (e) => {
    number = e.target.innerText;

    if(number % 1 != 0 && number != "="){
        firstNumber = numbers.innerText;
        operator = number;
        numbers.innerText = "";        
    }

    else if(number == "="){
        secondNumber = numbers.innerText;
        numbers.innerText = operate(parseInt(firstNumber),operator,parseInt(secondNumber))
        firstNumber = numbers .innerText;
    }
    else if(number == "C"){
        firstNumber = 0;
        numbers.innerText = " "
    }
    else{
        numbers.innerText = numbers.innerText + number;
    }
});
