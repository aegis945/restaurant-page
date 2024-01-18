import createHomePage from './home-page';
import createNavBar from './nav-bar';

const initialLoad = () => {
    createNavBar();
    createHomePage();
}

export default initialLoad;
