function loadHome() {
    const content = document.getElementById('content');

    const homeContainer = document.createElement('div');
    homeContainer.classList.add('home-container');
    homeContainer.setAttribute('id', 'home-container');

    const homeContentContainer = document.createElement('div');
    homeContentContainer.classList.add('home-content-container');

    const homeContent = document.createElement('p');

    homeContent.textContent = 'Hello DERP!';


    
    homeContainer.appendChild(homeContentContainer);
    homeContentContainer.appendChild(homeContent);

    content.appendChild(homeContainer);

}

export default loadHome;