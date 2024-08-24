window.addEventListener('DOMContentLoaded', fetchRequest)

const adviceNumber = document.getElementById('adviceNumber');
const adviceItself = document.getElementById('adviceItself');
const generateBtn = document.getElementById('generateBtn');

async function fetchRequest() {
    const responseFromTheApi = await fetch('https://api.adviceslip.com/advice');
    const jsonDataFromResponse = await responseFromTheApi.json();

    adviceNumber.textContent = jsonDataFromResponse.slip.id;
    adviceItself.textContent = jsonDataFromResponse.slip.advice;
};

generateBtn.addEventListener('click', fetchRequest);