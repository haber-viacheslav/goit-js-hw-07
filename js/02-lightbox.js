import { galleryItems } from './gallery-items.js';
// Change code below this line
const refs = {
	galleryRef: document.querySelector('.gallery'),
};

function addgaleryItemsMarkup(itemsArr) {
	return itemsArr
		.map(({ original, preview, description }) => {
			return `<a class="gallery__item" href="${original}"><img class="gallery__image" src="${preview}" alt="${description}"/></a>`;
		})
		.join('');
}

console.log(addgaleryItemsMarkup(galleryItems));

refs.galleryRef.insertAdjacentHTML(
	'beforeend',
	addgaleryItemsMarkup(galleryItems)
);

const galerySimpleLightBox = new SimpleLightbox('.gallery a', {
	captionsData: 'alt',
	loop: true,
	captionDelay: 250,
	animationSpeed: 250,
	animationSlide: true,
});

galerySimpleLightBox.show('show.simplelightbox', function () {});
