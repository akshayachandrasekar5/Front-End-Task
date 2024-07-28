
// Mock data for demonstration purposes
const countries = [
    { name: 'China', capital: 'Beijing', population: 1377422166, languages: ['Chinese'] },
    { name: 'India', capital: 'New Delhi', population: 1295210000, languages: ['Hindi', 'English'] },
    { name: 'United States of America', capital: 'Washington, D.C.', population: 323947000, languages: ['English'] },
    { name: 'Indonesia', capital: 'Jakarta', population: 258705000, languages: ['Indonesian'] },
    { name: 'Brazil', capital: 'Brasília', population: 206135893, languages: ['Portuguese'] },
    { name: 'Pakistan', capital: 'Islamabad', population: 194125062, languages: ['Urdu', 'English'] },
    { name: 'Nigeria', capital: 'Abuja', population: 186988000, languages: ['English'] },
    { name: 'Bangladesh', capital: 'Dhaka', population: 161006790, languages: ['Bengali'] },
    { name: 'Russian Federation', capital: 'Moscow', population: 146599183, languages: ['Russian'] },
    { name: 'Japan', capital: 'Tokyo', population: 126960000, languages: ['Japanese'] },
    // Add more countries if needed
  ];
  
  // 1. Sort countries by name
  const sortByName = (data) => {
    return data.slice().sort((a, b) => a.name.localeCompare(b.name));
  };
  
  // 2. Sort countries by capital
  const sortByCapital = (data) => {
    return data.slice().sort((a, b) => a.capital.localeCompare(b.capital));
  };
  
  // 3. Sort countries by population
  const sortByPopulation = (data) => {
    return data.slice().sort((a, b) => b.population - a.population);
  };
  
  // 4. Find the most spoken languages
  const mostSpokenLanguages = (data, topN) => {
    const languageCounts = data.reduce((acc, country) => {
      country.languages.forEach(language => {
        acc[language] = (acc[language] || 0) + 1;
      });
      return acc;
    }, {});
  
    return Object.entries(languageCounts)
      .map(([language, count]) => ({ country: language, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, topN);
  };
  
  // 5. Find the most populated countries
  const mostPopulatedCountries = (data, topN) => {
    return data
      .slice()
      .sort((a, b) => b.population - a.population)
      .map(country => ({ country: country.name, population: country.population }))
      .slice(0, topN);
  };
  
  // Testing all functions
  try {
    console.log('Sorted by Name:', sortByName(countries));
    console.log('Sorted by Capital:', sortByCapital(countries));
    console.log('Sorted by Population:', sortByPopulation(countries));
  
    console.log('Top 10 Most Spoken Languages:', mostSpokenLanguages(countries, 10));
    console.log('Top 3 Most Spoken Languages:', mostSpokenLanguages(countries, 3));
  
    console.log('Top 10 Most Populated Countries:', mostPopulatedCountries(countries, 10));
    console.log('Top 3 Most Populated Countries:', mostPopulatedCountries(countries, 3));
  } catch (error) {
    console.error('Error:', error);
  }
  
