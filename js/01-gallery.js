import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector('ul.gallery');
let instance = null;

const onCloseEsc = function (event) {
  if (event.code === 'Escape') {
    instance.close();
    document.removeEventListener('keydown', onCloseEsc);
  }
};

const onGalleryClick = event => {
  event.preventDefault();

  const {
    target: {
      nodeName,
      dataset: { source },
    },
  } = event;

  if (nodeName !== 'IMG') {
    return;
  }

  instance = basicLightbox.create(`
    <img src="${source}" width="800" height="600">
  `);

  instance.show();

  document.addEventListener('keydown', onCloseEsc);
};

galleryList.addEventListener('click', onGalleryClick);

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(galleryItem => {
      const { preview, original, description } = galleryItem;
      return `
        <li class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img
              class="gallery__image"
              src="${preview}"
              data-source="${original}"
              alt="${description}"
            />
          </a>
        </li>`;
    })
    .join('');
}

galleryList.insertAdjacentHTML('beforeend', createGalleryMarkup(galleryItems));
