import '../styles.css'
import getWeather from './api.js';
import githubIcon from '../icons/github.svg';
import weatherIcon from '../icons/cloud-sun-fill.svg';

export default function createUI() {
    createHeader();
    createFooter();
    createMain();
}

function createHeader() {
    const header = document.createElement('div');
    header.classList.add('header');

    const headerIcon = document.createElement("span");
    headerIcon.innerHTML = 
    `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-cloud-sun-fill" viewBox="0 0 16 16">
    <path d="M11.473 11a4.5 4.5 0 0 0-8.72-.99A3 3 0 0 0 3 16h8.5a2.5 2.5 0 0 0 0-5z"/>
    <path d="M10.5 1.5a.5.5 0 0 0-1 0v1a.5.5 0 0 0 1 0zm3.743 1.964a.5.5 0 1 0-.707-.707l-.708.707a.5.5 0 0 0 .708.708zm-7.779-.707a.5.5 0 0 0-.707.707l.707.708a.5.5 0 1 0 .708-.708zm1.734 3.374a2 2 0 1 1 3.296 2.198q.3.423.516.898a3 3 0 1 0-4.84-3.225q.529.017 1.028.129m4.484 4.074c.6.215 1.125.59 1.522 1.072a.5.5 0 0 0 .039-.742l-.707-.707a.5.5 0 0 0-.854.377M14.5 6.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1z"/>
    </svg>`;
    headerIcon.classList.add('header-icon');
    header.appendChild(headerIcon);

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

    const footerIcon = document.createElement('img');
    footerIcon.src = githubIcon;
    footerIcon.classList.add('footer-icon');
    footerIcon.alt = 'GitHub';
    footerLink.appendChild(footerIcon);

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

