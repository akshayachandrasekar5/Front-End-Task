
const catsAPI = 'https://api.thecatapi.com/v1/breeds';

fetch(catsAPI)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // Assuming data is an array of cat objects where each object has a 'name' property
    const catNames = data.map(cat => cat.name);
    console.log(catNames);
  })
  .catch(error => console.error('Error fetching cat data:', error));
