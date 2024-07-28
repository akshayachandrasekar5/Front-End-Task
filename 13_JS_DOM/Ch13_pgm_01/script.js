
document.addEventListener('DOMContentLoaded', function() {
    // Level 1 Tasks
    const firstParagraph = document.querySelector('p');
    console.log('1. First paragraph:', firstParagraph.textContent);

    const p1 = document.querySelector('#p1');
    const p2 = document.querySelector('#p2');
    const p3 = document.querySelector('#p3');
    const p4 = document.querySelector('#p4');

    const allParagraphs = document.querySelectorAll('p');

    console.log('2. Paragraph by IDs:', p1.textContent, p2.textContent, p3.textContent, p4.textContent);
    
    allParagraphs.forEach(paragraph => {
        console.log('3. All paragraphs:', paragraph.textContent);
    });

    allParagraphs[3].textContent = 'Fourth Paragraph';

    allParagraphs.forEach((paragraph, index) => {
        paragraph.id = `p${index + 1}`;
        paragraph.classList.add(`class${index + 1}`);
    });

    // Level 2 Tasks
    allParagraphs.forEach(paragraph => {
        paragraph.style.color = 'blue';
        paragraph.style.backgroundColor = 'lightgray';
        paragraph.style.border = '1px solid black';
        paragraph.style.fontSize = '16px';
        paragraph.style.fontFamily = 'Arial, sans-serif';
    });

    allParagraphs.forEach((paragraph, index) => {
        if (index % 2 === 0) {
            paragraph.style.color = 'green';
        } else {
            paragraph.style.color = 'red';
        }
    });

    allParagraphs.forEach((paragraph, index) => {
        paragraph.textContent = `Paragraph ${index + 1}`;
        paragraph.id = `p${index + 1}`;
        paragraph.classList.add(`class${index + 1}`);
    });
});
