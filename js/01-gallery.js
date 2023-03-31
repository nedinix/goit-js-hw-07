import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const container = document.querySelector(".gallery");

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

container.addEventListener("click", onClick);

function onClick(e) {
	e.preventDefault();
	if (!e.target.classList.contains("gallery__image")) {
		return;
	}
	// console.log(e.target, "click");
	// console.log(e.target.dataset.source);

	const imageEl = basicLightbox.create(
		`
    <img src="${e.target.dataset.source}" width="800" height="600">
  `,
		{
			onShow: (imageEl) => {
				window.addEventListener("keydown", onKeyPressEsc);

				console.log("onShow");
			},
			onClose: (imageEl) => {
				window.removeEventListener("keydown", onKeyPressEsc);
				console.log(onKeyPressEsc());
				console.log("onClose");
			},
		}
	);

	imageEl.show();
}

function onKeyPressEsc(e) {
	if (e.code !== "Escape") {
		return;
	}

	console.log(e.code);
	// console.log(e.code);
}

/*


document.querySelector('button.image').onclick = () => {

	basicLightbox.create(`
		<img width="1400" height="900" src="https://placehold.it/1400x900">
	`).show()

}



*/
