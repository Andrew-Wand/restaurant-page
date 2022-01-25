function loadMenu() {
    const content = document.getElementById('content');

    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container');

    const menuContentContainer = document.createElement('div');
    menuContentContainer.classList.add('menu-content-container');

    const menuTitle = document.createElement('div');
    menuTitle.classList.add('menu-title');

    menuTitle.textContent = 'Menu';

    menuContainer.appendChild(menuContentContainer);
    menuContentContainer.appendChild(menuTitle);

    content.appendChild(menuContainer);

    const menuItemContainer = document.createElement('div');
    menuItemContainer.classList.add('menu-item-container');

    menuContentContainer.appendChild(menuItemContainer);


    //Menu items

        //First item
        const menuItemOne = document.createElement('img');
        menuItemOne.src = '/dist/assets/rspancakeimg.jpg';
        menuItemOne.classList.add('menu-item');
        menuItemContainer.appendChild(menuItemOne);
        //Second item
        const menuItemTwo = document.createElement('img');
        menuItemTwo.src = '/dist/assets/rspancakeimg.jpg';
        menuItemTwo.classList.add('menu-item');
        menuItemContainer.appendChild(menuItemTwo);
        //Third item
        const menuItemThree = document.createElement('img');
        menuItemThree.src = '/dist/assets/rspancakeimg.jpg';
        menuItemThree.classList.add('menu-item');
        menuItemContainer.appendChild(menuItemThree);



}

export default loadMenu;