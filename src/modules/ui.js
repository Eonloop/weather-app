import '../styles.css'
import getWeather from './api.js';
import githubIcon from '../icons/github.svg';

export default function createUI() {
    createHeader();
    createFooter();
    createMain();
}

function createHeader() {
    const header = document.createElement('div');
    header.classList.add('header');
    
    const headerTitle = document.createElement('h1');
    headerTitle.textContent = 'Weathered';
    header.appendChild(headerTitle);

    document.body.appendChild(header);
}

function createFooter() {
    const footer = document.createElement('div');
    footer.classList.add('footer');

    const footerText = document.createElement('p');
    footerText.textContent = 'Eonloop'

    const footerLink = document.createElement('a');
    footerLink.href = 'https://github.com/Eonloop';
    footerLink.target = '_blank';
    footerLink.rel = 'noopener noreferrer';

    const icon = document.createElement('img');
    icon.src = githubIcon;
    icon.classList.add('footer-icon');
    icon.alt = 'GitHub';
    footerLink.appendChild(icon);

    const footerDate = document.createElement('p');
    footerDate.textContent = new Date().getFullYear();

    footer.appendChild(footerLink);
    footer.appendChild(footerText);
    footer.appendChild(footerDate);
    document.body.appendChild(footer);
}

function createMain() {

    const main = document.createElement('div');
    main.classList.add('main');
    document.body.appendChild(main);

    const mainContent = document.createElement('div');
    mainContent.classList.add('main-content');
    mainContent.textContent = "Enter your location to get the weather!"
    main.appendChild(mainContent);

    const mainInput = document.createElement('input');
    mainInput.classList.add('main-input');
    mainInput.type = 'text';
    mainInput.placeholder = 'Enter your location';
    main.appendChild(mainInput);

    const mainButton = document.createElement('button');
    mainButton.classList.add('main-button');
    mainButton.textContent = 'Get Weather';
    main.appendChild(mainButton);

    mainButton.addEventListener('click', async () => {
        const test = await getWeather(mainInput.value);
        console.log(test);
        mainContent.textContent = `The weather in ${mainInput.value} is ${test.currentConditions.temp}°F`;
    });
}

