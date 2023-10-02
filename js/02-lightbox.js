
import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');

function createMarkup(arr) {
  return arr
    .map(({ preview, original, description }) => `
      <li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
      </li>
    `)
    .join('');
}

const markup = createMarkup(galleryItems);
gallery.insertAdjacentHTML('beforeend', markup); //додаємо в ul 

const lightbox = new SimpleLightbox('.gallery a', { //змінила назву !
  captions: true,
  captionDelay: 250,
  captionsData: 'alt'
});
