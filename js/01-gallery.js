import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');
gallery.addEventListener("click", handleCklick);

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

gallery.insertAdjacentHTML('beforeend', createMarkup(galleryItems));

function handleCklick(event) {
    event.preventDefault();
    console.log(event.target);
}