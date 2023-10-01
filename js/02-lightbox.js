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


function handleClick(event) {
    console.log(event)
   
    if (event.target.nodeName !== 'IMG') {
        return;
    } 

    const gallery = new SimpleLightbox('.gallery a', {
        captions: true,
        captionDelay: 250,
        captionsData: 'alt',
    });
 
}


