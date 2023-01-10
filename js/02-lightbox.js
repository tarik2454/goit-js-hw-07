import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');

const createCardsMarkup = ({ preview, original, description }) => {
  return `
      <a class="gallery__item" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          alt="${description}"
          title="${description}"
        />
      </a>
  `;
};

const createCardsGallery = [...galleryItems].map(createCardsMarkup).join('');
galleryContainer.insertAdjacentHTML('beforeend', createCardsGallery);

new SimpleLightbox('.gallery a', {
  fadeSpeed: 100,
  animationSlide: false,
});

//* ---- Second option (forEach)
// import { galleryItems } from './gallery-items.js';
// // Change code below this line

// const galleryContainer = document.querySelector('.gallery');
// const items = [];

// galleryItems.forEach(element => {
//   const galleryLink = document.createElement('a');
//   galleryLink.className = 'gallery__link';
//   galleryLink.href = element.original;
//   const galleryImage = document.createElement('img');
//   galleryImage.className = 'gallery__image';
//   galleryImage.src = element.preview;
//   galleryImage.setAttribute('title', element.description);
//   galleryImage.alt = element.description;

//   galleryLink.append(galleryImage);
//   items.push(galleryLink);
// });

// galleryContainer.append(...items);

// new SimpleLightbox('.gallery a', {
//   captionDelay: 250,
// });
