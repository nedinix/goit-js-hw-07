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

function onClick(e) {
	e.preventDefault();
	if (!e.target.classList.contains("gallery__image")) {
		return;
	}
	const imageEl = basicLightbox.create(
		`
    <img src="${e.target.dataset.source}" width="800" height="600">
    `,
		{
			handler: null,
			onShow: (imageEl) => {
				this.handler = onKeyPressEsc.bind(imageEl);
				window.addEventListener("keydown", this.handler);
			},
			onClose: () => {
				window.removeEventListener("keydown", this.handler);
			},
		}
	);

	imageEl.show();
}

function onKeyPressEsc(e) {
	if (e.code !== "Escape") {
		return;
	}
	this.close();
}
