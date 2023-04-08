const displayContact = () => {
    // const mainContentContainer = document.querySelector("#main-content");

    const mainContent = document.createElement("div");
    mainContent.setAttribute('id', 'main-content');

    const mainContentH1 = document.createElement('h1');
    mainContentH1.textContent = 'Contact Us';

    const card1 = document.createElement('div');
    card1.setAttribute('id', 'card1');
    const card1P = document.createElement('p');
    card1P.textContent = 'We would love to hear from you. Whether you have a question, \r\n a comment, or a reservation, feel free to contact us anytime. \r\n You can reach us by phone, email, or social media. Here are some of \r\n our friendly staff who are ready to assist you:';
    card1.appendChild(card1P);

    const card2 = document.createElement('div');
    card2.setAttribute('id', 'card2');
    const card2P = document.createElement('p');
    card2P.textContent = "- Bessie the Cow - Manager\r\nPhone: 0917-123-4567\r\nEmail: bessie@restoranch.com\r\nFacebook: @bessiethecow\r\n\r\n- Charlie the Chicken - Chef\r\nPhone: 0918-234-5678\r\nEmail: charlie@restoranch.com\r\nInstagram: @charliethechicken\r\n\r\n- Daisy the Duck - Waitress\r\nPhone: 0919-345-6789\r\nEmail: daisy@restoranch.com\r\nTwitter: @daisytheduck";
    card2.appendChild(card2P);

    
    mainContent.appendChild(mainContentH1);
    mainContent.appendChild(card1);
    mainContent.appendChild(card2);

    return mainContent;
};

export default displayContact();
