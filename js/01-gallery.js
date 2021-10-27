import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const gallerySet = document.querySelector('.gallery');
const galleryMarkup = renderGallery(galleryItems);

gallerySet.insertAdjacentHTML('beforeend', galleryMarkup);
gallerySet.addEventListener('click', onModalIsOpen);

function renderGallery(items) {
    return items
        .map(
            ({ original, preview, description }) =>
                `<div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
             </a>
        </div>`,
        )
        .join(' ');
}

function onModalIsOpen(event) {
    event.preventDefault();
    window.addEventListener('keydown', onModalIsClosed);

    if (event.target.nodeName !== 'IMG') {
        return;
    }

    const urlOfItem = event.target.dataset.source;
    console.log(urlOfItem);

    const instance = basicLightbox.create(`
<div class="modal">
    <img src="${urlOfItem}" width="800" height="600"/>
    </div>
`);

    instance.show();

    const elem = instance.element();
    window.addEventListener('keydown', onModalIsClosed);
    window.addEventListener('click', onModalIsClosed);

    function onModalIsClosed(event) {
        const ESC_KEY_CODE = 'Escape';
        if (event.code === ESC_KEY_CODE) {
            instance.close();
            window.removeEventListener('keydown', onModalIsClosed);
        }
    }
}
