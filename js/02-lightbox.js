import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const galleryEl = document.querySelector(".gallery")
// console.log(galleryEl)

function addGalleryMarkup(gallery) {
    return gallery.map(({original, preview, description}) => 
        `
        <li class="gallery__item">
            <a class="gallery__item" href="${original}">
            <img class="gallery__image" 
            src="${preview}" 
            alt="${description}"/>
            </a>
        </li>
        `
    ).join('')
}

// console.log(addGalleryMarkup(galleryItems))


galleryEl.innerHTML = addGalleryMarkup(galleryItems)
galleryEl.addEventListener('click', onImgClikc)

function onImgClikc(e) {
    e.preventDefault()
    
    if (e.target.nodeName !=="IMG") {
        return
    }
    
     backdrop()
    
}


function backdrop() {
    
    const instance = new SimpleLightbox('.gallery a', {
        
            animationSpeed: 250,
            loop: true,
            enableKeyboard: true,
            preloading: true,
        docClose: true,
        captionsData: 'alt',
        }
    );
    return instance

}

