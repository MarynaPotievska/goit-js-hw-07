import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

const galleryMarkup = [];

for (let i = 0; i < galleryItems.length; i += 1) {
  const galleryItem = `<div class="gallery__item">
		<a class="gallery__link" href="${galleryItems[i].original}">
			<img
				class="gallery__image"
				src="${galleryItems[i].preview}"
				data-source="${galleryItems[i].original}"
				alt="${galleryItems[i].description}"
			/>
		</a>
	</div>`;

  galleryMarkup.push(galleryItem);
}

console.log(galleryItems);

gallery.insertAdjacentHTML("beforeend", galleryMarkup);

gallery.addEventListener("click", onImgClick);

let instance;

function onImgClick(evt) {
  evt.preventDefault();

  const originalImg = evt.target.dataset.source;

  instance = basicLightbox.create(`    
		<img src="${originalImg}">
	`);

  instance.show();

  document.addEventListener("keydown", onEscKeydown);
}

function onEscKeydown(event) {
  if (event.code === "Escape") {
    instance.close();
    document.removeEventListener();
  }
}
