export default function pageLoad () {
    // Body Start
    const contentContainer = document.querySelector('#content');

    //Menu
    const menuContainer = document.createElement('div');
    menuContainer.id = "menu";
    
    const menuElementOne = document.createElement('div');
    menuElementOne.textContent = "Home";
    menuContainer.appendChild(menuElementOne);

    const menuElementTwo = document.createElement('div');
    menuElementTwo.textContent = "Menu";
    menuContainer.appendChild(menuElementTwo);

    const menuElementThree = document.createElement('div');
    menuElementThree.textContent = "Contact";
    menuContainer.appendChild(menuElementThree);

    // Hero
    const heroContainer = document.createElement('div');
    heroContainer.id = "hero";

    const heroImageContainer = document.createElement('div');
    heroImageContainer.id = "image-container";
    const heroImage = document.createElement('img');
    heroImage.src = '../assets/racoon-chef.jpg';
    heroImageContainer.appendChild(heroImage);


    const heroTitle = document.createElement('h1');
    heroTitle.classList.add('h1-overlay');
    heroTitle.textContent = "Trashy Food Inc.";


    const heroHoursText = document.createElement('p');
    heroHoursText.classList.add('text-overlay');
    const textNode1 = document.createTextNode("Opening Hours");
    const br = document.createElement('br');
    const textNode2 = document.createTextNode("Monday to Friday: 4pm - 10pm");    
    heroHoursText.appendChild(textNode1);
    heroHoursText.appendChild(br);
    heroHoursText.appendChild(textNode2);
    
    heroImageContainer.appendChild(heroTitle);
    heroImageContainer.appendChild(heroHoursText)

    heroContainer.appendChild(heroImageContainer);


    // About

    const aboutContainer = document.createElement('div');
    aboutContainer.id = "about";

    const aboutText = document.createElement('p');
    aboutText.textContent = "We believe in stopping food waste. That is why we, at Trashy Food Inc., will bring you exceptional culinary expriences created from the food that would otherwise have gone to waste. Does that mean all the food we are serving is rotten? No. We have parnered with a bunch of local supermarkets and take anything from them that reaches its best before date. We don't serve you anything we wouldn't eat ourselves ;)";

    aboutContainer.appendChild(aboutText);


    //Body End
    contentContainer.appendChild(menuContainer);
    contentContainer.appendChild(heroContainer);
    contentContainer.appendChild(aboutContainer);

}