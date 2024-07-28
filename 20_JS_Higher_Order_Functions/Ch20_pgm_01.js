
// Level 1

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]


// 2. Define a callback function before you use it in forEach, map, filter or reduce.
function callback(element) {
  console.log(element);
}

// 3. Use forEach to console.log each country in the countries array.
countries.forEach(callback);

// 4. Use forEach to console.log each name in the names array.
names.forEach(callback);

// 5. Use forEach to console.log each number in the numbers array.
numbers.forEach(callback);

// 6. Use map to create a new array by changing each country to uppercase in the countries array.
const countriesUpperCase = countries.map(country => country.toUpperCase());
console.log(countriesUpperCase);

// 7. Use map to create an array of countries length from countries array.
const countriesLength = countries.map(country => country.length);
console.log(countriesLength);

// 8. Use map to create a new array by changing each number to square in the numbers array.
const squaredNumbers = numbers.map(number => number * number);
console.log(squaredNumbers);

// 9. Use map to change to each name to uppercase in the names array.
const namesUpperCase = names.map(name => name.toUpperCase());
console.log(namesUpperCase);

// 10. Use map to map the products array to its corresponding prices.
const productPrices = products.map(product => product.price);
console.log(productPrices);

// 11. Use filter to filter out countries containing land.
const countriesWithLand = countries.filter(country => country.includes('land'));
console.log(countriesWithLand);

// 12. Use filter to filter out countries having six characters.
const sixCharacterCountries = countries.filter(country => country.length === 6);
console.log(sixCharacterCountries);

// 13. Use filter to filter out countries containing six letters and more in the country array.
const sixOrMoreLetterCountries = countries.filter(country => country.length >= 6);
console.log(sixOrMoreLetterCountries);

// 14. Use filter to filter out country start with 'E';
const countriesStartingWithE = countries.filter(country => country.startsWith('E'));
console.log(countriesStartingWithE);

// 15. Use filter to filter out only prices with values.
const validPrices = products.filter(product => product.price !== '' && product.price !== ' ').map(product => product.price);
console.log(validPrices);

// 16. Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
function getStringLists(arr) {
  return arr.filter(item => typeof item === 'string');
}

console.log(getStringLists(['hello', 123, 'world', true, 'JavaScript']));

// 17. Use reduce to sum all the numbers in the numbers array.
const sumOfNumbers = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sumOfNumbers);

// 18. Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
const sentence = countries.reduce((acc, country, index) => {
  return index === countries.length - 1 ? acc + 'and ' + country + ' are north European countries.' : acc + country + ', ';
}, '');
console.log(sentence);

// 19. Explain the difference between some and every
// (Explanation is provided above)

// 20. Use some to check if some names' length greater than seven in names array
const someNamesLongerThanSeven = names.some(name => name.length > 7);
console.log(someNamesLongerThanSeven);

// 21. Use every to check if all the countries contain the word land
const allCountriesContainLand = countries.every(country => country.includes('land'));
console.log(allCountriesContainLand);

// 22. Explain the difference between find and findIndex.
// (Explanation is provided above)

// 23. Use find to find the first country containing only six letters in the countries array
const firstSixLetterCountry = countries.find(country => country.length === 6);
console.log(firstSixLetterCountry);

// 24. Use findIndex to find the position of the first country containing only six letters in the countries array
const firstSixLetterCountryIndex = countries.findIndex(country => country.length === 6);
console.log(firstSixLetterCountryIndex);

// 25. Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
const norwayIndex = countries.findIndex(country => country === 'Norway');
console.log(norwayIndex);

// 26. Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.
const russiaIndex = countries.findIndex(country => country === 'Russia');
console.log(russiaIndex);
