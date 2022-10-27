import { galleryItems } from './gallery-items.js';
// Change code below this line
const refs = { galleryRef: document.querySelector('.gallery') };

const galeryItemsMarkup = galleryItems
	.map(({ original, preview, description }) => {
		return `<div class="gallery__item"> <a class="gallery__link" href="${original}">
		<img class="gallery__image" src="${preview}" data-source="${original}"
			alt="${description}"/></a></div> `;
	})
	.join('');

refs.gallery.innerHTML = galeryItemsMarkup;
