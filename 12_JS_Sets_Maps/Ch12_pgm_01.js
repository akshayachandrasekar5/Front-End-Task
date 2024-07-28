
const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];
const countries = ['Finland', 'Sweden', 'Norway'];

// 1. Create an empty set
const emptySet = new Set();
console.log("Empty Set:", emptySet); // Output: Set {}

// 2. Create a set containing numbers 0 to 10 using a loop
const numberSet = new Set();
for (let i = 0; i <= 10; i++) {
  numberSet.add(i);
}
console.log("Number Set:", numberSet); // Output: Set { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 }

// 3. Remove an element from a set
numberSet.delete(5); // Removing the element 5 from the set
console.log("Number Set after deletion:", numberSet); // Output: Set { 0, 1, 2, 3, 4, 6, 7, 8, 9, 10 }

// 4. Clear a set
numberSet.clear();
console.log("Number Set after clearing:", numberSet); // Output: Set {}

// 5. Create a set of 5 string elements from array
const stringSet = new Set(countries);
console.log("String Set from array:", stringSet); // Output: Set { 'Finland', 'Sweden', 'Norway' }

// 6. Create a map of countries and number of characters of each country
const countryMap = new Map();
countries.forEach(country => {
  countryMap.set(country, country.length);
});
console.log("Country Map:", countryMap);
