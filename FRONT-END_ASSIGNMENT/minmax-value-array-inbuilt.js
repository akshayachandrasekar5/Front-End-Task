function findMinAndMax(arr) {
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    return { min, max };
}

// Example usage:
let numberArray = [5, 3, 8, 1, 2, 7];
let { min, max } = findMinAndMax(numberArray);
console.log(`Minimum: ${min}, Maximum: ${max}`); // Output: Minimum: 1, Maximum: 8
