
const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];
const countries = ['Finland', 'Sweden', 'Norway'];

// Find Union (a ∪ b)
const unionSet = new Set([...a, ...b]);
const union = [...unionSet];
console.log("Union of a and b:", union); // Output: [ 4, 5, 8, 9, 3, 7 ]

// Find Intersection (a ∩ b)
const aSet = new Set(a);
const intersection = b.filter(num => aSet.has(num));
console.log("Intersection of a and b:", intersection); // Output: [ 4, 5 ]

// Find Difference (a - b)
const bSet = new Set(b);
const difference = a.filter(num => !bSet.has(num));
console.log("Difference of a with b:", difference); // Output: [ 8, 9 ]
