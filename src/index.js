import pageLoadHome from "./pageload-home";
import pageLoadContact from "./pageload-contact";
import pageLoadMenu from "./pageload-menu";
import './style.css';
import '../node_modules/normalize.css';

loadHome();


function loadHome () {
    pageLoadHome();
    console.log('home loaded')
    menuClick();
}

function loadMenu() {
    pageLoadMenu();
    console.log('loaded menu');
    menuClick();
}

function loadContact () {
    pageLoadContact();
    console.log('loaded contact');
    menuClick();
}



function menuClick () {

    const menuBtnHome = document.querySelector('#menu-one');
    const menuBtnMenu = document.querySelector('#menu-two');
    const menuBtnContact = document.querySelector('#menu-three');
    
    menuBtnHome.addEventListener('click', loadHome);
    menuBtnMenu.addEventListener('click', loadMenu);
    menuBtnContact.addEventListener('click', loadContact);
    
}
