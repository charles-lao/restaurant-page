const displayMenu = () => {

    const mainContent = document.createElement("div");
    mainContent.setAttribute('id', 'main-content');

    const mainContentH1 = document.createElement('h1');
    mainContentH1.textContent = 'Menu';



    mainContent.appendChild(mainContentH1);
    return mainContent;
};

export default displayMenu();