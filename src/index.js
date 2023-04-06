import './style.css';
import './reset-css.css';
import displayHome from './home';
// import Background from './livestock-pattern.jpg';

const displayController = (() => {

    const content = document.querySelector("#content");
    
    const header = document.createElement("div");
    header.setAttribute('id', 'header');
    
    const headerUl = document.createElement("ul");
    
    const homeLi = document.createElement("li");
    homeLi.textContent = 'Home';

    const menuLi = document.createElement("li");
    menuLi.textContent = 'Menu';

    const contactLi = document.createElement("li");
    contactLi.textContent = "Contact"

    
    headerUl.appendChild(homeLi);
    headerUl.appendChild(menuLi);
    headerUl.appendChild(contactLi);

    header.appendChild(headerUl);
    content.appendChild(header);


    // create div for main-content section
    const mainContent = document.createElement('div');
    mainContent.setAttribute('id', 'main-content');
    content.appendChild(mainContent);

    const displayPage = (page) => {
        // TO DO - Clean up textContent of mainContent then make a switch statement to display the correct page module
        alert(`display ${ page}`);
    }

    homeLi.addEventListener('click', (e) => {
        displayPage('home');
    });

    menuLi.addEventListener('click', (e) => {
        displayPage('menu');
    });

    contactLi.addEventListener('click', (e) => {
        displayPage('contact');
    });
    
    // Initializes main-content section
    mainContent.appendChild(displayHome);



    // TO DO - Create footer design
})();

