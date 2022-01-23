function loadContact() {
    const content = document.getElementById('content');

    const contactContainer = document.createElement('div');

    const contactContent = document.createElement('div');

    contactContent.textContent = 'Third page!';

    contactContainer.appendChild(contactContent);

    content.appendChild(contactContainer);
}

export default loadContact;