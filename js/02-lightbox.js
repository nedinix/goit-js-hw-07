import { galleryItems } from "./gallery-items.js";
// Change code below this line

const container = document.querySelector(".gallery");
container.addEventListener("click", onClick);

const markup = galleryItems
	.map(
		({ preview, original, description }) =>
			`<li class='gallery__item'>
        <a class='gallery__link' href='${original}'>
          <img
            class='gallery__image'
            src='${preview}'
            data-source='${original}'
            alt='${description}'
          />
        </a>
      </li>`
	)
	.join("");

container.insertAdjacentHTML("beforeend", markup);

var imageEl = new SimpleLightbox(".gallery a", {
	/* options */
});

function onClick(e) {
	imageEl.show.simplelightbox;
}
