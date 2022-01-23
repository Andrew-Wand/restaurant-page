function loadHome() {
    const content = document.getElementById('content');

    const homeContainer = document.createElement('div');
    homeContainer.classList.add('home-container');
    homeContainer.setAttribute('id', 'home-container');

    const homeContent = document.createElement('p');
    homeContent.classList.add('home-content');

    homeContent.textContent = 'Hello DERP!';

    homeContainer.appendChild(homeContent);

    content.appendChild(homeContainer);

}

export default loadHome;