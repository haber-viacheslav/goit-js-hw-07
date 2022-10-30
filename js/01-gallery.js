import { galleryItems } from './gallery-items.js';
// Change code below this line
const refs = {
	galleryRef: document.querySelector('.gallery'),
};

refs.galleryRef.addEventListener('click', onClickGalleryItem);

function addGaleryItemsMarkup(itemsArr) {
	return itemsArr
		.map(({ original, preview, description }) => {
			return `<div class="gallery__item"> <a class="gallery__link" href="${original}">
		<img class="gallery__image" src="${preview}" data-source="${original}"
			alt="${description}"/></a></div> `;
		})
		.join('');
}

refs.galleryRef.insertAdjacentHTML(
	'beforeend',
	addGaleryItemsMarkup(galleryItems)
);

function onClickGalleryItem(evt) {
	evt.preventDefault();
	if (evt.target.nodeName !== 'IMG') {
		return;
	}
	const originalImgEl = basicLightbox.create(
		`
	<div class="modal">
    	<img src="${evt.target.dataset.source}" width="1280">
	</div>`,
		{
			onShow: instance => {
				refs.galleryRef.addEventListener('keydown', onModalAddKeydown);
			},
			onClose: instance => {
				refs.galleryRef.removeEventListener(
					'keydown',
					onModalAddKeydown
				);
			},
		}
	);
	originalImgEl.show();

	function onModalAddKeydown(evt) {
		if (evt.code === 'Escape') {
			originalImgEl.close();
		}
	}
}
