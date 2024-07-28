let rectangles = [
    { length: 10, width: 5 },
    { length: 7, width: 3 },
    { length: 15, width: 8 }
  ];
  
  rectangles.forEach(function(rectangle) {
    rectangle.area = rectangle.length * rectangle.width;
    console.log(`Rectangle - Length: ${rectangle.length}, Width: ${rectangle.width}, Area: ${rectangle.area}`);
  });