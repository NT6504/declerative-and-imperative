
const appDiv = document.getElementById('app');

// Create a new paragraph element
const paragraph = document.createElement('p');

// Set the text content of the paragraph
paragraph.textContent = 'Hello, World!';

appDiv.appendChild(paragraph);

console.log("Imperative: 'Hello, World!' message added to the DOM.");