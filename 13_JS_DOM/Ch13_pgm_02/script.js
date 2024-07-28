
document.addEventListener('DOMContentLoaded', function() {
    // 1. Change the year color every 1 second
    const yearElement = document.querySelector('h2');
    setInterval(() => {
        const randomColor = getRandomColor();
        yearElement.style.color = randomColor;
    }, 1000);

    // 2. Change the date and time background color every second
    const dateElement = document.querySelector('.wrapper');
    setInterval(() => {
        const randomColor = getRandomColor();
        dateElement.style.backgroundColor = randomColor;
    }, 1000);

    // 3. Set background for completed challenge
    const pythonChallenge = document.getElementById('pythonChallenge');
    pythonChallenge.classList.add('done');

    // 4. Set background for ongoing challenge
    const javascriptChallenge = document.getElementById('javascriptChallenge');
    javascriptChallenge.classList.add('ongoing');

    // 5. Set background for coming challenges
    const reactChallenge = document.getElementById('reactChallenge');
    reactChallenge.classList.add('coming');

    const fullStackChallenge = document.getElementById('fullStackChallenge');
    fullStackChallenge.classList.add('coming');

    const dataAnalysisChallenge = document.getElementById('dataAnalysisChallenge');
    dataAnalysisChallenge.classList.add('coming');

    const reactNativeChallenge = document.getElementById('reactNativeChallenge');
    reactNativeChallenge.classList.add('coming');

    const machineLearningChallenge = document.getElementById('machineLearningChallenge');
    machineLearningChallenge.classList.add('coming');
});

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
