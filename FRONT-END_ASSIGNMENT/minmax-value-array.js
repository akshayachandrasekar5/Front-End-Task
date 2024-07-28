function findMinMax(arr) {
    if (arr.length === 0) return { min: null, max: null };
    
    let min = arr[0];
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return { min: min, max: max };
}

const array = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
const result = findMinMax(array);
console.log("Min:", result.min);
console.log("Max:", result.max);
