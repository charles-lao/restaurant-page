const displayHome = () => {
    // const mainContentContainer = document.querySelector("#main-content");

    const mainContent = document.createElement("div");
    mainContent.textContent = 'This is the main content from home.js';

    return mainContent;
};

export default displayHome();
