function loadMenu() {
    const content = document.getElementById('content');

    const menuContainer = document.createElement('div');

    const menuContent = document.createElement('div');

    menuContent.textContent = 'Second page!';

    menuContainer.appendChild(menuContent);

    content.appendChild(menuContainer);

}

export default loadMenu;