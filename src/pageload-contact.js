export default function pageLoadContact () {
    // Body Start
    let contentContainer = document.querySelector('#content');
    contentContainer.innerHTML = "";

    //Menu
    const menuContainer = document.createElement('div');
    menuContainer.id = "menu";
    
    const menuElementOne = document.createElement('button');
    menuElementOne.id = "menu-one";
    menuElementOne.textContent = "Home";
    menuContainer.appendChild(menuElementOne);

    const menuElementTwo = document.createElement('button');
    menuElementTwo.id = "menu-two";
    menuElementTwo.textContent = "Menu";
    menuContainer.appendChild(menuElementTwo);

    const menuElementThree = document.createElement('button');
    menuElementThree.id = "menu-three";
    menuElementThree.textContent = "Contact";
    menuContainer.appendChild(menuElementThree);


    // Contact info

    const contactContainer = document.createElement('div');
    contactContainer.id = "contact-info";

    const aboutText = document.createElement('p');
    aboutText.textContent = "We believe in stopping food waste. That is why we, at Trashy Food Inc., will bring you exceptional culinary expriences created from the food that would otherwise have gone to waste. Does that mean all the food we are serving is rotten? No. We have parnered with a bunch of local supermarkets and take anything from them that reaches its best before date. We don't serve you anything we wouldn't eat ourselves ;)";

    contactContainer.appendChild(aboutText);


    //Body End
    contentContainer.appendChild(menuContainer);
    contentContainer.appendChild(contactContainer);

}