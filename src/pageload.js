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

    const heroHoursContainer = document.createElement('div');
    const heroHoursText = document.createElement('p');
    
    const textNode1 = document.createTextNode("Opening Hours");
    const br = document.createElement('br');
    const textNode2 = document.createTextNode("Monday to Friday: 4pm - 10pm");
    
    heroHoursText.appendChild(textNode1);
    heroHoursText.appendChild(br);
    heroHoursText.appendChild(textNode2);
    
    
    heroHoursContainer.appendChild(heroHoursText);
    heroImageContainer.appendChild(heroHoursContainer)

    heroContainer.appendChild(heroImageContainer);


    // About


    //Body End
    contentContainer.appendChild(menuContainer);
    contentContainer.appendChild(heroContainer);
}