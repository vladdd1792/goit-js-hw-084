// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector(".gallery");
const galleryLst = createGalleryCard(galleryItems);
gallery.insertAdjacentHTML("beforeend", galleryLst);

function createGalleryCard(cardItems) {
    return cardItems
      .map(({ preview, original, description }) => {
        return `
          <a class="gallery__item"
          href="${original}">
          <img class="gallery__image"
              src="${preview}" 
              alt=${description}" />
          </a>
          `;
      })
      .join("");
  }
  

  new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 300,
  });