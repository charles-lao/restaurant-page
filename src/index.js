import './style.css';
import './reset-css.css';
// import Background from './livestock-pattern.jpg';

const displayController = (() => {

    const container = document.querySelector("#content");
    
    const header = document.createElement("div");
    header.setAttribute('id', 'header');
    
    const headerUl = document.createElement("ul");
    
    const homeLi = document.createElement("li");
    homeLi.textContent = 'Home';

    const menuLi = document.createElement("li");
    menuLi.textContent = 'Menu';

    const contactLi = document.createElement("li");
    contactLi.textContent = "Contact"

    
    homeLi.addEventListener('click', (e) => {

    });
    
    headerUl.appendChild(homeLi);
    headerUl.appendChild(menuLi);
    headerUl.appendChild(contactLi);

    header.appendChild(headerUl);
    container.appendChild(header);

    
})();

