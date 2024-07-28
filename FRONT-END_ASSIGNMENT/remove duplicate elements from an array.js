function removeDuplicates(arr) {
    let uniqueArray = [];
    let seen = new Set();

    for (let element of arr) {
        if (!seen.has(element)) {
            seen.add(element);
            uniqueArray.push(element);
        }
    }

    return uniqueArray;
}

// Example usage:
let inputArray = [1, 2, 2, 3, 4, 4, 5, 5];
let outputArray = removeDuplicates(inputArray);
console.log(outputArray); // Output: [1, 2, 3, 4, 5]
