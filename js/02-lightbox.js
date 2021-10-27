import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
console.log(galleryItems);
const gallerySet = document.querySelector('.gallery');
const galleryMarkup = renderGallery(galleryItems);

gallerySet.insertAdjacentHTML('beforeend', galleryMarkup);
gallerySet.addEventListener('click', event);

function renderGallery(items) {
    return items
        .map(
            ({ original, preview, description }) =>
                `<a class="gallery__item" href="${original}">
                 <img class="gallery__image" src="${preview}" alt="${description}" />
          </a>`,
        )
        .join(' ');
}

var lightbox = new SimpleLightbox('.gallery a', {
    captionType: `alt`,
    captionDelay: 250,
});
