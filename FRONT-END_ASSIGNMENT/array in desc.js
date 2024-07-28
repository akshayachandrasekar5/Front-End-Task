function sortDescending(arr) {
    return arr.sort((a, b) => b - a);
}

// Example usage:
let numberArray = [5, 3, 8, 1, 2, 7];
let sortedArray = sortDescending(numberArray);
console.log(sortedArray); // Output: [8, 7, 5, 3, 2, 1]
