
// Level 1

class Animal {
    constructor(name, age, color, legs) {
      this.name = name;
      this.age = age;
      this.color = color;
      this.legs = legs;
    }
  
    makeSound() {
      console.log(`${this.name} makes a sound.`);
    }
  
    getInfo() {
      return `${this.name} is ${this.age} years old, has ${this.color} color and ${this.legs} legs.`;
    }
  }
  
  class Dog extends Animal {
    constructor(name, age, color, legs, breed) {
      super(name, age, color, legs);
      this.breed = breed;
    }
  
    makeSound() {
      console.log(`${this.name} barks.`);
    }
  
    getInfo() {
      return `${super.getInfo()} It is a ${this.breed} breed.`;
    }
  }
  
  class Cat extends Animal {
    constructor(name, age, color, legs, breed) {
      super(name, age, color, legs);
      this.breed = breed;
    }
  
    makeSound() {
      console.log(`${this.name} meows.`);
    }
  
    getInfo() {
      return `${super.getInfo()} It is a ${this.breed} breed.`;
    }
  }
  
  // Level 2
  
  // Demonstrate overriding of methods
  const myDog = new Dog('Buddy', 3, 'brown', 4, 'Labrador');
  const myCat = new Cat('Whiskers', 2, 'white', 4, 'Siamese');
  
  console.log(myDog.getInfo());
  myDog.makeSound();
  
  console.log(myCat.getInfo());
  myCat.makeSound();
  
  // Level 3
  
  class Statistics {
    constructor(data) {
      this.data = data;
      this.sortedData = [...data].sort((a, b) => a - b);
    }
  
    count() {
      return this.data.length;
    }
  
    sum() {
      return this.data.reduce((acc, num) => acc + num, 0);
    }
  
    min() {
      return Math.min(...this.data);
    }
  
    max() {
      return Math.max(...this.data);
    }
  
    range() {
      return this.max() - this.min();
    }
  
    mean() {
      return this.sum() / this.count();
    }
  
    median() {
      const mid = Math.floor(this.sortedData.length / 2);
      if (this.sortedData.length % 2 === 0) {
        return (this.sortedData[mid - 1] + this.sortedData[mid]) / 2;
      } else {
        return this.sortedData[mid];
      }
    }
  
    mode() {
      const frequency = {};
      this.data.forEach(num => frequency[num] = (frequency[num] || 0) + 1);
      const maxCount = Math.max(...Object.values(frequency));
      const mode = Object.keys(frequency).find(key => frequency[key] === maxCount);
      return { mode: Number(mode), count: maxCount };
    }
  
    variance() {
      const mean = this.mean();
      const squaredDiffs = this.data.map(num => (num - mean) ** 2);
      return squaredDiffs.reduce((acc, num) => acc + num, 0) / this.count();
    }
  
    std() {
      return Math.sqrt(this.variance());
    }
  
    freqDist() {
      const frequency = {};
      this.data.forEach(num => frequency[num] = (frequency[num] || 0) + 1);
      return Object.entries(frequency).map(([key, count]) => [Number(key), count]);
    }
  }
  
  // Test data
  const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26];
  const statistics = new Statistics(ages);
  
  console.log('Count:', statistics.count());
  console.log('Sum:', statistics.sum());
  console.log('Min:', statistics.min());
  console.log('Max:', statistics.max());
  console.log('Range:', statistics.range());
  console.log('Mean:', statistics.mean());
  console.log('Median:', statistics.median());
  console.log('Mode:', statistics.mode());
  console.log('Variance:', statistics.variance());
  console.log('Standard Deviation:', statistics.std());
  console.log('Frequency Distribution:', statistics.freqDist());
  
