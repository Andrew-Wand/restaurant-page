function loadMenu() {
    const content = document.getElementById('content');

    const menuContainer = document.createElement('div');

    const menuContent = document.createElement('div');

    menuContent.textContent = 'Derp!';

    menuContainer.appendChild(menuContent);

    content.appendChild(menuContainer);

}

export default loadMenu;