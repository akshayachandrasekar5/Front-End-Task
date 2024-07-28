
const fetchData = async () => {
    const url = 'https://restcountries.com/v2/all';
  
    // Using async/await
    try {
      // Fetch data
      const response = await fetch(url);
      const countries = await response.json();
      
      // Log data
      console.log('===== Using async/await');
      console.log(countries);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  
    // Using promises
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log('===== Using Promises');
        console.log(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };
  
  // Call the fetchData function
  fetchData();
  