
// Level 2

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
// 1. Find the total price of products by chaining two or more array iterators
const totalValidPrice = products
  .map(product => product.price)
  .filter(price => typeof price === 'number' && price > 0)
  .reduce((sum, price) => sum + price, 0);
console.log(totalValidPrice); // Output: 27

// 2. Find the sum of price of products using only reduce
const totalPrice = products.reduce((sum, product) => {
  const price = typeof product.price === 'number' ? product.price : 0;
  return sum + price;
}, 0);
console.log(totalPrice); // Output: 27

// 3. Declare a function called categorizeCountries
function categorizeCountries(pattern) {
  return countries.filter(country => country.includes(pattern));
}
console.log(categorizeCountries('land')); // Output: ['Finland', 'IceLand']
console.log(categorizeCountries('en')); // Output: ['Sweden', 'Denmark']

// 4. Create a function to return an array of objects with the letter and the number of times it starts a country's name
function countInitialLetters(countries) {
  return countries.reduce((acc, country) => {
    const initial = country[0].toUpperCase();
    const index = acc.findIndex(item => item.letter === initial);

    if (index !== -1) {
      acc[index].count += 1;
    } else {
      acc.push({ letter: initial, count: 1 });
    }

    return acc;
  }, []);
}
console.log(countInitialLetters(countries));
// Output: [ { letter: 'F', count: 1 }, { letter: 'S', count: 1 }, { letter: 'D', count: 1 }, { letter: 'N', count: 1 }, { letter: 'I', count: 1 } ]

// 5. Declare a getFirstTenCountries function
function getFirstTenCountries(countries) {
  return countries.slice(0, 10);
}
console.log(getFirstTenCountries(countries));
// Output: ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand', 'USA', 'Canada', 'Mexico', 'Brazil', 'Argentina']

// 6. Declare a getLastTenCountries function
function getLastTenCountries(countries) {
  return countries.slice(-10);
}
console.log(getLastTenCountries(countries));
// Output: ['Denmark', 'Norway', 'IceLand', 'USA', 'Canada', 'Mexico', 'Brazil', 'Argentina', 'Chile', 'Colombia']

// 7. Find out which letter is used many times as initial for a country name
function mostFrequentInitial(countries) {
  const initialCounts = countries.reduce((acc, country) => {
    const initial = country[0].toUpperCase();
    acc[initial] = (acc[initial] || 0) + 1;
    return acc;
  }, {});

  return Object.entries(initialCounts).reduce((max, [letter, count]) => {
    return count > max.count ? { letter, count } : max;
  }, { letter: '', count: 0 });
}
console.log(mostFrequentInitial(countries)); 
// Output: { letter: 'C', count: 3 }
