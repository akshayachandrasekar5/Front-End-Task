
const catsAPI = 'https://api.thecatapi.com/v1/breeds';

fetch(catsAPI)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // Assuming each cat object has a 'weight' property in different units
    const weightsInMetric = data.map(cat => {
      // Assuming 'weight' property has 'metric' field with weight in grams
      return cat.weight.metric;
    });

    // Convert weights to numbers and calculate average
    const weightsNumeric = weightsInMetric.map(weight => parseFloat(weight.replace(/[^0-9.]/g, '')));
    const sum = weightsNumeric.reduce((acc, val) => acc + val, 0);
    const averageWeight = sum / weightsNumeric.length;

    console.log(`Average weight of cats in metric units: ${averageWeight} grams`);
  })
  .catch(error => console.error('Error fetching cat data:', error));
