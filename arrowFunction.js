const summation = function add(num1, num2) {
    return num1 + num2;
}
console.log(summation(7,5));

// this same thing we can do in a shorter form in es6

const sum = (num1, num2) => num1 + num2; // when we have only one line code to return value
console.log(sum(7,5));

// when we have multiple line code to return value
const mult = (num1, num2) => {
    const sum = num1 + num2;
    const sub = num1 - num2;
    const result = sum * sub;
    return result;
}
console.log(mult(7,5));