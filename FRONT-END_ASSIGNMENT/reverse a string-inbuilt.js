function reverseString(str) {
    return str.split('').reverse().join('');
}

// Example usage:
let inputString = "Hello, World!";
let reversedString = reverseString(inputString);
console.log(reversedString); // Output: "!dlroW ,olleH"
