
// Level 1
localStorage.setItem('firstName', 'Sharan');
localStorage.setItem('lastName', 'Lastname'); // Replace 'Lastname' with your actual last name
localStorage.setItem('age', '25'); // Replace '25' with your actual age
localStorage.setItem('country', 'Country'); // Replace 'Country' with your actual country
localStorage.setItem('city', 'City'); // Replace 'City' with your actual city

// Level 2
const student = {
    firstName: 'Sharan',
    lastName: 'Lastname', // Replace 'Lastname' with your actual last name
    age: 25, // Replace '25' with your actual age
    skills: ['JavaScript', 'Python', 'Java'], // Add your skills here
    country: 'Country', // Replace 'Country' with your actual country
    enrolled: true
};

localStorage.setItem('student', JSON.stringify(student));

// Level 3
const personAccount = {
    firstName: 'Sharan',
    lastName: 'Lastname', // Replace 'Lastname' with your actual last name
    incomes: [
        { description: 'Salary', amount: 5000 },
        { description: 'Freelancing', amount: 1500 }
    ],
    expenses: [
        { description: 'Rent', amount: 1000 },
        { description: 'Groceries', amount: 300 }
    ],
    totalIncome: function() {
        return this.incomes.reduce((acc, income) => acc + income.amount, 0);
    },
    totalExpense: function() {
        return this.expenses.reduce((acc, expense) => acc + expense.amount, 0);
    },
    accountInfo: function() {
        return `Name: ${this.firstName} ${this.lastName}\nTotal Income: ${this.totalIncome()}\nTotal Expense: ${this.totalExpense()}\nAccount Balance: ${this.accountBalance()}`;
    },
    addIncome: function(description, amount) {
        this.incomes.push({ description, amount });
    },
    addExpense: function(description, amount) {
        this.expenses.push({ description, amount });
    },
    accountBalance: function() {
        return this.totalIncome() - this.totalExpense();
    }
};

localStorage.setItem('personAccount', JSON.stringify(personAccount));
