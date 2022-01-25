const createHeader = () => {
    const headerContainer = document.createElement('header');
    headerContainer.classList.add('header-container');

    const siteTitle = document.createElement('h1');
    siteTitle.classList.add('site-title');
    siteTitle.setAttribute('id', 'site-title');
    siteTitle.textContent = 'Perfect Pancakes';

    const imgLogoContact = document.createElement('img');
    imgLogoContact.src = '/dist/assets/pancake.png';
    imgLogoContact.classList.add('logo-img-contact');
    imgLogoContact.setAttribute('id', 'logo-img-contact');
    
    const imgLogoMenu = document.createElement('img');
    imgLogoMenu.src = '/dist/assets/pancake.png';
    imgLogoMenu.classList.add('logo-img-menu');
    imgLogoMenu.setAttribute('id', 'logo-img-menu');
    
    const headerImgOne = document.createElement('img');
    headerImgOne.src = '/dist/assets/New Project.png';
    headerImgOne.classList.add('header-img-one');
    
    
    const headerImgTwo = document.createElement('img');
    headerImgTwo.src = '/dist/assets/header-img-two.png';
    headerImgTwo.classList.add('header-img-two');


    







    headerContainer.appendChild(headerImgTwo);
    headerContainer.appendChild(headerImgOne);
    headerContainer.appendChild(siteTitle);
    headerContainer.appendChild(createNav());
    headerContainer.appendChild(imgLogoMenu);
    headerContainer.appendChild(imgLogoContact);

    return headerContainer;
}


const createBtn = (id, context) => {
    const navBtn = document.createElement('button');
    navBtn.classList.add('nav-btn');
    navBtn.textContent = context;
    navBtn.setAttribute('id', id);
    return navBtn;
}


const createNav = () => {
    const navBar = document.createElement('nav');
    navBar.classList.add('nav-bar');

    const homeBtn = createBtn('home-btn', 'Home');
    const menuBtn = createBtn('menu-btn', 'Menu');
    const contactBtn = createBtn('contact-btn', 'Contact');

    navBar.appendChild(homeBtn);
    navBar.appendChild(menuBtn);
    navBar.appendChild(contactBtn);

    return navBar;

    
}

 function loadHeader() {
    const content = document.getElementById('content');

    const header = createHeader();
    content.appendChild(header);
};



export default loadHeader;