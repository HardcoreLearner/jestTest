const functionsToTest = require("./sum");

let sum = functionsToTest.sum;
let capitalize = functionsToTest.capitalize;
let reverseString = functionsToTest.reverseString;
let calculator = functionsToTest.calculator;
let analyseArray = functionsToTest.analyseArray;
let caesarCipher = functionsToTest.caesarCipher;

console.log(functionsToTest);
// test sum
test('adds 1+2 to equal 3', () => {
    expect(sum(1,2)).toBe(3);
});
// test capitalize
test("Capitalize single letter", () => {
    expect(capitalize("a")).toBe("A");
})

test("Capitalize empty shall return empty", () => {
    expect(capitalize("")).toBe("");
})

test("Capitalize phrase", () => {
    expect(capitalize("a nboivs vsv vsd")).toBe("A nboivs vsv vsd");
})
// test reverseString
test("reversal", () => {
    expect(reverseString("abc")).toBe("cba");
})

test("empty reversal", () => {
    expect(reverseString("")).toBe("");
})

test("reversal of single character", () => {
    expect(reverseString("a")).toBe("a");
})
// test calculator
test("addition", () => {
    expect(calculator.add(1,2)).toBe(3);
})

test("substraction", () => {
    expect(calculator.subtract(5, 4)).toBe(1);
})

test("division", () => {
    expect(calculator.divide(6, 3)).toBe(2);
})

test("multiplication", () => {
    expect(calculator.multiply(5, 3)).toBe(15);
})
// test caesarCipher
test("normal behavior", () => {
    expect(caesarCipher("abc", 1)).toBe("bcd");
})

test("wrapping if shift greater than 26", () => {
    expect(caesarCipher("abc", 27)).toBe("bcd");
})

test("capital letters", () => {
    expect(caesarCipher("LMN", 1)).toBe("MNO");
})

test("mix letters", () => {
    expect(caesarCipher("aBcD", 1)).toBe("bCdE");
})
// test analyze Array

test("normal execution", () => {
    expect(analyseArray([1,8,3,4,2,6])).toStrictEqual({average: 4,
        min: 1,
        max: 8,
        length: 6
      });
})