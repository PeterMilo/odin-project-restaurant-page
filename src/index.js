import pageLoadHome from "./pageload-home";
import pageLoadContact from "./pageload-contact";
import './style.css';
import '../node_modules/normalize.css';


const log = (function () {
    console.log('Up and running!');
})();

const Tabswitch = (function (tab) {
    const menuBtnContact = document.querySelector('#menu-one');
    
    let loadthisTab 

    function loadTabInitiation () {
        pageLoadHome();
        console.log('loaded')
    };
    // if (loadthisTab = 'contact') {
        
    // }

    return {loadTabInitiation};
})();


Tabswitch.loadTabInitiation();