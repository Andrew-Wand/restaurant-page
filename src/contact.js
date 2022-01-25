function loadContact() {
    const content = document.getElementById('content');

    const contactContainer = document.createElement('div');
    contactContainer.classList.add('contact-container');

    const contactContentContainer = document.createElement('div');
    contactContentContainer.classList.add('contact-content-container');

    const contactContent = document.createElement('div');

    contactContent.textContent = 'Third page!';

    contactContainer.appendChild(contactContentContainer);

    contactContentContainer.appendChild(contactContent);

    content.appendChild(contactContainer);
}

export default loadContact;