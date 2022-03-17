import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const galleryEl = document.querySelector(".gallery")
// console.log(galleryEl)

function addGalleryMarkup(gallery) {
    return gallery.map(({original, preview, description}) => 
        `
        <div class="gallery__item">
            <a class="gallery__item" href="${original}">
            <img class="gallery__image" 
            src="${preview}" 
            alt="${description}" />
            </a>
        </div>
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
    
     backdrop(e)
    
}


function backdrop(e) {
    
    const instance = new SimpleLightbox('.gallery a', {
        className: 'simple-lightbox',
        captionsData: 'alt', animationSpeed: 250,
        loop: true,
        enableKeyboard: true,
        preloading: true,
        docClose: true
    });
    instance.show.simplelightbox;

    // instance.addEventListener('mousemuve', titl)

    // function titl(e) {
    //     e.target.
    // }

    // window.addEventListener('keydown', onExitBackdrop);

}

// function onExitBackdrop(e) {
//     if (e.code!=='Escape') {
//         return
//     }
    
//     document.querySelector('.simple-lightbox').remove();
// }

