import loadContact from './contact';
import loadHome from './home';
import loadMenu from './menu';
import loadHeader from './header';



loadHeader();
loadHome();



function pancakeAnim() {
    const logoImg = document.getElementById('logo-img');

    logoImg.animate([
        { transform: 'translateY(0px) rotate(0deg)' },
        { transform: 'translateY(-10px) rotate(1080deg)'}
    ], {
        duration: 100,
        fill: 'forwards'
    });
    



}

const content = document.querySelector("#content");


const homeBtn = document.getElementById('home-btn');
const menuBtn = document.getElementById('menu-btn');
const contactBtn = document.getElementById('contact-btn');

homeBtn.classList.add('selected');

homeBtn.addEventListener('click', () => {
    homeBtn.classList.add('selected');
    menuBtn.classList.remove('selected');
    contactBtn.classList.remove('selected');
    content.removeChild(content.lastChild);
    loadHome();
});

menuBtn.addEventListener('click', () => {
    menuBtn.classList.add('selected');
    homeBtn.classList.remove('selected');
    contactBtn.classList.remove('selected');
    content.removeChild(content.lastChild);
    loadMenu();
   
});

contactBtn.addEventListener('click', () => {
    contactBtn.classList.add('selected');
    homeBtn.classList.remove('selected');
    menuBtn.classList.remove('selected');
    content.removeChild(content.lastChild);
    pancakeAnim();
    loadContact();
});




const siteTitle = document.getElementById('site-title');

siteTitle.addEventListener('click', () => {
    location.reload();
});

