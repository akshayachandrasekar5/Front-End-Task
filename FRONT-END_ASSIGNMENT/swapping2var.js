let a = 5;
let b = 10;

console.log("Before swap: a =", a, ", b =", b);

// Swapping using arithmetic operations
a = a + b;
b = a - b;
a = a - b;

console.log("After swap: a =", a, ", b =", b);
