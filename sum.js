function sum(a, b) {
    return a+b;
}

function capitalize(string) {
    if (string.length == 0) {
        return "";
    }
    let statement = string.split("");
    statement[0] = statement[0].toUpperCase();
    statement = statement.join("");
    return statement;
}

function reverseString(string) {
    if (string.length <= 1) {
        return string;
    }
    let reversed = [];
    let statement = string.split("");
    console.log(statement, statement.length);
    for (let index = 0; index < statement.length; index++) {
        reversed.unshift(statement[index]);
    }
    reversed = reversed.join("");
    return reversed;
}

const calculator = {
    add: (a,b) => a+b,
    subtract: (a,b) => a-b,
    multiply: (a,b) => a*b,
    divide: (a,b) => a/b,
}

function analyseArray(arr) {
    let min = arr[0];
    let average;
    let max = arr[0];
    let length = arr.length;
    let total = 0;
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        if (element < min) {
            min = element;
        }
        if (element > max) {
            max = element;
        }
        total += element;
    }
    return {average: total/length, min: min, max: max, length: length};
}

function caesarCipher(string, shift) {
    shift = shift % 26;
    let statement = string;
    for (let index = 0; index < statement.length; index++) {
        let ascii = statement.charCodeAt(index);
        if (ascii <= 90 && ascii >= 65) {
            let newChar = ascii+shift;
            if (newChar > 90) {
                newChar -= 26;
            }
            statement = statement.split("");
            statement[index] = String.fromCharCode(newChar);
            statement = statement.join("");
        } else if (ascii <= 122 && ascii >= 97) {
            let newChar = ascii+shift;
            if (newChar > 122) {
                newChar -= 26;
            }
            statement = statement.split("");
            statement[index] = String.fromCharCode(newChar);
            statement = statement.join("");
        } else {
            continue;
        }
    }
    return statement;
}

console.log(analyseArray([1,8,3,4,2,6]));

module.exports = {
    sum: sum,
    capitalize: capitalize,
    reverseString: reverseString,
    calculator: calculator,
    analyseArray: analyseArray,
    caesarCipher: caesarCipher
};
