const url = 'https://restcountries.com/v2/all'; // countries api

fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // parsing the response as JSON
  })
  .then(data => {
    // accessing the data after successful fetch
    console.log(data);
  })
  .catch(error => {
    console.error('Error fetching data:', error); // handling any errors that occur during fetch
  });

