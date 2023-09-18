function add(number1, number2) {
    return number1 + number2;
}
console.log(add(36, 10));

// if someone forgot to give the second parameter then the solution is here
function summation(num1, num2 = 10) {
    return num1 + num2;
}
console.log(summation(36));

    // another solution
function sum(firstNumber, secondNumber){
    if (secondNumber == undefined){
        secondNumber = 10;
    }
    return firstNumber + secondNumber;
}
console.log(sum(36));

    //another solution
function summ(numX, numY){
    numY = numY || 10;
    return numX + numY;
}
console.log (summ(36));