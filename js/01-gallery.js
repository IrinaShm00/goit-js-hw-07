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
// gallery.insertAdjacentHTML('beforeend', createMarkup(galleryItems));


//1 спосіб який не спрацював (передивитися)

//     if (event.target === event.currentTarget) {
//         return;
//     }
//     const img = event.target.closest(".gallery__image");
//     console.log(img);

//     const instance = basicLightbox.create(`
//     <div class="modal"> 
//     <img 
//     class="gallery_item"
//     src="${img.preview}"
//     data-source="${img.original}"
//     alt="${img.description}"
//     />
//     </div>
// `)
// instance.show()