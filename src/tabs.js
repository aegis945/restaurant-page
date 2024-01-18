import createHomePage from './home-page';
import createMenuPage from './menu';
import createContactPage from './contact';

const switchTabs = () => {
    const homeButton = document.querySelector('#home');
    const menuButton = document.querySelector('#menu');
    const contactButton = document.querySelector('#contact');

    homeButton.addEventListener('click', () => {
        clearTabContent();
        createHomePage();
    });

    menuButton.addEventListener('click', () => {
        clearTabContent();
        createMenuPage();
    });

    contactButton.addEventListener('click', () => {

    });
}

const clearTabContent = () => {
    const content = document.querySelector('#content');
    const pageContent = document.querySelector('#pageContent');
    content.removeChild(pageContent);
}

export default switchTabs;
