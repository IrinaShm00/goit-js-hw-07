import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');
gallery.addEventListener("click", handleClick);

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
// console.log(galleryItems);

function handleClick(event) {
    console.log(event)
    event.preventDefault();

if (event.target.classList.contains('gallery__image')) {
    const gallery = new SimpleLightbox('.gallery a', {
        captions: true, //показує підписи для img 
        captionDelay: 250, //adds a delay before the caption shows (in ms)
        captionsData: 'alt',
    });
  }
}