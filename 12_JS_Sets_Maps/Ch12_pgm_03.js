
const countries = [
    { name: 'Finland', languages: ['Finnish', 'Swedish'] },
    { name: 'Sweden', languages: ['Swedish'] },
    { name: 'Norway', languages: ['Norwegian'] }
  ];
  
  const countLanguages = (countries) => {
    const languagesSet = new Set();
    countries.forEach(country => {
      country.languages.forEach(language => {
        languagesSet.add(language);
      });
    });
    return languagesSet.size;
  };
  
  const mostSpokenLanguages = (countries, limit) => {
    const languageCounts = {};
    
    countries.forEach(country => {
      country.languages.forEach(language => {
        if (languageCounts[language]) {
          languageCounts[language]++;
        } else {
          languageCounts[language] = 1;
        }
      });
    });
    
    const sortedLanguages = Object.entries(languageCounts)
      .sort((a, b) => b[1] - a[1]) // Sort by count in descending order
      .slice(0, limit) // Take only the top 'limit' languages
    
    const result = sortedLanguages.map(([language, count]) => ({ [language]: count }));
    return result;
  };
  
  const totalLanguages = countLanguages(countries);
  console.log("Total number of languages:", totalLanguages); // Output: 3
  
  console.log("\nMost spoken languages:");
  console.log(mostSpokenLanguages(countries, 10));
  // Output:
  // [
  //   { 'Swedish': 2 },
  //   { 'Finnish': 1 },
  //   { 'Norwegian': 1 }
  // ]
  
  console.log("\nTop 3 most spoken languages:");
  console.log(mostSpokenLanguages(countries, 3));
  // Output:
  // [
  //   { 'Swedish': 2 },
  //   { 'Finnish': 1 },
  //   { 'Norwegian': 1 }
  // ]
  
