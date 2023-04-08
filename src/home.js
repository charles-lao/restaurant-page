const displayHome = () => {
    // const mainContentContainer = document.querySelector("#main-content");

    const mainContent = document.createElement("div");
    mainContent.setAttribute('id', 'main-content');

    const mainContentH1 = document.createElement('h1');
    mainContentH1.textContent = 'RESTO RANCH';

    const card1 = document.createElement('div');
    card1.setAttribute('id', 'card1');
    const card1P = document.createElement('p');
    card1P.textContent = 'Welcome to Resto Ranch, the best place to enjoy fresh and \r\n delicious food in a cozy and rustic setting. Whether \r\n you are looking for a hearty breakfast, a satisfying \r\n lunch, or a mouthwatering dinner, we have something \r\n for everyone.';
    card1.appendChild(card1P);

    const card2 = document.createElement('div');
    card2.setAttribute('id', 'card2');
    const card2H = document.createElement('h3');
    card2H.textContent = 'Hours';
    card2.appendChild(card2H);
    const card2P = document.createElement('p');
    card2P.textContent = "Sunday: 8am - 8pm \r\n Monday: 6am - 6pm \r\n Tuesday: 6am - 6pm \r\n Wednesday: 6am - 6pm \r\n Thursday: 6am - 10pm \r\n Friday: 6am - 10pm \r\n Saturday: 8am - 10pm";
    card2.appendChild(card2P);

    const card3 = document.createElement('div');
    card3.setAttribute('id', 'card3');
    const card3H = document.createElement('h3');
    card3H.textContent = 'Location';
    card3.appendChild(card3H);
    const card3P = document.createElement('p');
    card3P.textContent = "Cuyapo, Nueva Ecija, Philippines";
    card3.appendChild(card3P);

    
    mainContent.appendChild(mainContentH1);
    mainContent.appendChild(card1);
    mainContent.appendChild(card2);
    mainContent.appendChild(card3);

    return mainContent;
};

export default displayHome();
