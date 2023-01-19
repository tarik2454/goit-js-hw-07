import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');

const cardsMarkup = createCardsMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup);

galleryContainer.addEventListener('click', onCardsClick);

function createCardsMarkup(elements) {
  return elements
    .map(({ preview, original, description }) => {
      return `
      <div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>
      `;
    })
    .join('');
}

function onCardsClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  }

  const parentGalleryCard = event.target.closest('.gallery__item');

  removeActiveCardClass();
  addActiveCardClass(parentGalleryCard);

  const selectedImage = event.target.getAttribute('data-source');
  addOriginalImgToModal(selectedImage);
}

function addOriginalImgToModal(originalImageLink) {
  const instance = basicLightbox.create(`
      <img src="${originalImageLink}" width="800" height="600">
  `);

  instance.show();

  closeModalByEsc(instance);
}

function closeModalByEsc(instance) {
  window.addEventListener('keydown', event => {
    if (event.code === 'Escape') {
      instance.close();
    }
  });
}

function removeActiveCardClass() {
  const currentActiveCard = document.querySelector('.gallery__item.is-active');
  if (currentActiveCard) {
    currentActiveCard.classList.remove('is-active');
  }
}

function addActiveCardClass(card) {
  card.classList.add('is-active');
}
