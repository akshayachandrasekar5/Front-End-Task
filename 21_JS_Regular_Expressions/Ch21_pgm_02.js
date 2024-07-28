
function tenMostFrequentWords(paragraph, topN = 10) {
    // Normalize the text: Convert to lowercase and remove punctuation
    const normalizedParagraph = paragraph.toLowerCase().replace(/[^\w\s]/g, '');
    
    // Split the text into words
    const words = normalizedParagraph.split(/\s+/);
    
    // Count the frequency of each word
    const wordCount = words.reduce((countMap, word) => {
      if (word) {
        countMap[word] = (countMap[word] || 0) + 1;
      }
      return countMap;
    }, {});
    
    // Convert the count map to an array of objects with word and count
    const wordArray = Object.entries(wordCount).map(([word, count]) => ({ word, count }));
    
    // Sort by count in descending order and get the top N words
    const sortedWords = wordArray.sort((a, b) => b.count - a.count).slice(0, topN);
    
    return sortedWords;
  }
  
  // Test data
  const paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`;
  
  // Testing the function
  console.log(tenMostFrequentWords(paragraph));
  console.log(tenMostFrequentWords(paragraph, 10));
  
