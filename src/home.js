function loadHome() {
    const content = document.getElementById('content');

    const homeContainer = document.createElement('div');
    homeContainer.classList.add('home-container');
    homeContainer.setAttribute('id', 'home-container');

    const homeContentContainer = document.createElement('div');
    homeContentContainer.classList.add('home-content-container');

    const homeContent = document.createElement('p');

    homeContent.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non enim praesent elementum facilisis leo. Scelerisque eu ultrices vitae auctor eu augue ut. Quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor. Platea dictumst vestibulum rhoncus est.';

    
    homeContainer.appendChild(homeContentContainer);
    homeContentContainer.appendChild(homeContent);

    content.appendChild(homeContainer);


    // Right side 

    const rightSideContainer = document.createElement('div');

    homeContainer.appendChild(rightSideContainer);
    rightSideContainer.classList.add('right-side-container');

    const rightSideContainerContent = document.createElement('img');

    rightSideContainerContent.src = '/dist/assets/rspancakeimg.jpg';
    rightSideContainerContent.classList.add('right-side-img');

    rightSideContainer.appendChild(rightSideContainerContent);

    





     

}

export default loadHome;