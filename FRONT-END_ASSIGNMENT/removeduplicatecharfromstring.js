function removeDuplicates(str) {
    let result = "";
    let seen = new Set();

    for (let char of str) {
        if (!seen.has(char)) {
            seen.add(char);
            result += char;
        }
    }

    return result;
}

// Example usage:
let inputString = "aabbccddeeff";
let outputString = removeDuplicates(inputString);
console.log(outputString); // Output: "abcdef"
