document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('container');

    function isPrime(num) {
        if (num <= 1) return false;
        if (num <= 3) return true;
        if (num % 2 === 0 || num % 3 === 0) return false;
        for (let i = 5; i * i <= num; i += 6) {
            if (num % i === 0 || num % (i + 2) === 0) return false;
        }
        return true;
    }

    for (let i = 1; i <= 100; i++) {
        const numberDiv = document.createElement('div');
        numberDiv.className = 'number';
        numberDiv.textContent = i;

        if (isPrime(i)) {
            numberDiv.style.backgroundColor = 'red';
        } else if (i % 2 === 0) {
            numberDiv.style.backgroundColor = 'green';
        } else {
            numberDiv.style.backgroundColor = 'yellow';
        }

        container.appendChild(numberDiv);
    }
});
