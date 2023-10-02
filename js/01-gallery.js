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
    event.preventDefault();

if (typeof event.target.dataset.source === "undefined") {
    alert("Ooops look like data set is missed!");
    return;
}

const instance = basicLightbox.create(`<div class="modal">
<img class="gallery_item" src="${event.target.dataset.source}"/>
</div>`)
instance.show()
}
