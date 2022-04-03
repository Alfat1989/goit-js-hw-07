import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery")

function addGalleryMarkup(gallery) {
    return gallery.map(({original, preview, description}) => 
        `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img

                class="gallery__image lazyload"
                data-src="${preview}"
                data-source="${original}"
                alt="${description}"
                />
            </a>
        </div>
        `
    ).join('')
}

galleryEl.innerHTML = addGalleryMarkup(galleryItems)
galleryEl.addEventListener('click', onImgClikc)

function onImgClikc(e) {
    e.preventDefault()
    
    if (e.target.nodeName !=="IMG") {
        return
    }
    
     backdrop(e)    
}

function backdrop(e) {
      const instance = basicLightbox.create(`<img src="${e.target.dataset.source}">`);
    instance.show();

    window.addEventListener('keydown', onExitBackdrop);

}

function onExitBackdrop(e) {
    if (e.code!=='Escape') {
        return
    }
    document.querySelector('.basicLightbox').remove();
}

