const displayMenu = () => {

    const mainContent = document.createElement("div");
    mainContent.setAttribute('id', 'main-content');

    const mainContentH1 = document.createElement('h1');
    mainContentH1.textContent = 'Menu';

    const card1 = document.createElement('div');
    card1.setAttribute('id', 'card1');
    const card1H = document.createElement('h3');
    card1H.textContent = 'Appetizers';
    card1.appendChild(card1H);
    const card1P = document.createElement('p');
    card1P.textContent = 'Lumpiang Sariwa (Fresh Spring Rolls) - P120 \r\n Chicharon Bulaklak (Crispy Pork Rinds) - P150 \r\n Sinigang na Bangus sa Miso (Milkfish in Sour Miso Soup) - P180';
    card1.appendChild(card1P);

    const card2 = document.createElement('div');
    card2.setAttribute('id', 'card2');
    const card2H = document.createElement('h3');
    card2H.textContent = 'Main Dishes';
    card2.appendChild(card2H);
    const card2P = document.createElement('p');
    card2P.textContent = "Lechon Kawali (Crispy Pork Belly) - P250 \r\n Kare-Kare (Oxtail Stew in Peanut Sauce) - P280 \r\n Pinakbet (Mixed Vegetables with Shrimp Paste) - P200";
    card2.appendChild(card2P);

    const card3 = document.createElement('div');
    card3.setAttribute('id', 'card3');
    const card3H = document.createElement('h3');
    card3H.textContent = 'Desserts';
    card3.appendChild(card3H);
    const card3P = document.createElement('p');
    card3P.textContent = "Halo-Halo (Mixed Fruits and Ice Cream) - P100 \r\n Turon (Banana Fritters) - P80 \r\n Bibingka (Rice Cake with Cheese and Salted Egg) - P120";
    card3.appendChild(card3P);

    
    mainContent.appendChild(mainContentH1);
    mainContent.appendChild(card1);
    mainContent.appendChild(card2);
    mainContent.appendChild(card3);

    return mainContent;
};

export default displayMenu();
