import loadContact from './contact';
import loadHome from './home';
import loadMenu from './menu';
import loadHeader from './header';



loadHeader();
loadHome();

const content = document.querySelector("#content");


const homeBtn = document.getElementById('home-btn');
const menuBtn = document.getElementById('menu-btn');
const contactBtn = document.getElementById('contact-btn');



function contactAnim() {
    const logoImgContact = document.getElementById('logo-img-contact');

    logoImgContact.animate([{
            transform: 'translateY(0px)'
        },
        {
            transform: 'translateY(-20px) '
        }
    ], {
        duration: 150,
        fill: 'forwards'
    });
}


function menuAnim() {
    const logoImgMenu = document.getElementById('logo-img-menu');

    logoImgMenu.animate([{
            transform: 'translateY(0px) '
        },
        {
            transform: 'translateY(-20px) '
        }
    ], {
        duration: 150,
        fill: 'forwards'
    });
    
}

function menuAnimDown() {
    const logoImgMenu = document.getElementById('logo-img-menu');

    logoImgMenu.animate([{
        transform: 'translateY(-20px) '
    },
    {
        transform: 'translateY(0px) '
    }
], {
    duration: 150,
    fill: 'forwards'
});
}

function contactAnimDown() {
    const logoImgContact = document.getElementById('logo-img-contact');

    logoImgContact.animate([{
            transform: 'translateY(-20px)'
        },
        {
            transform: 'translateY(0px) '
        }
    ], {
        duration: 150,
        fill: 'forwards'
    });
}

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
    menuAnim();
    contactAnimDown();
    menuBtn.disabled = false;
    if (menuBtn.classList.contains('selected')) {
        menuBtn.disabled = true;
        menuBtn.style.color = '#000';
    }

    if (contactBtn.disabled = true) {
        contactBtn.disabled = false;
    }
});

contactBtn.addEventListener('click', () => {
    contactBtn.classList.add('selected');
    homeBtn.classList.remove('selected');
    menuBtn.classList.remove('selected');
    content.removeChild(content.lastChild);
    contactAnim();
    loadContact();
    menuAnimDown();

    contactBtn.disabled = false;
    if (contactBtn.classList.contains('selected')) {
        contactBtn.disabled = true;
        contactBtn.style.color = '#000';
    }




    if (menuBtn.disabled = true) {
        menuBtn.disabled = false;
    }
});




const siteTitle = document.getElementById('site-title');

siteTitle.addEventListener('click', () => {
    location.reload();
});