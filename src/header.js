const createHeader = () => {
    const headerContainer = document.createElement('header');
    headerContainer.classList.add('header-container');

    const siteTitle = document.createElement('h1');
    siteTitle.classList.add('site-title');
    siteTitle.setAttribute('id', 'site-title');
    siteTitle.textContent = 'Perfect Pancakes';

    headerContainer.appendChild(siteTitle);
    headerContainer.appendChild(createNav());

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