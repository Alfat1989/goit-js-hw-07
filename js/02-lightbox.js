import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const galleryEl = document.querySelector(".gallery")

function addGalleryMarkup(gallery) {
    return gallery.map(({original, preview, description}) => 
        `
        <li>
            <a class="gallery__item" href="${original}">
            <img class="gallery__image" 
            src="${preview}" 
            alt="${description}"/>
            </a>
        </li>
        `
    ).join('')
}



galleryEl.innerHTML = addGalleryMarkup(galleryItems)

const instance = new SimpleLightbox('.gallery a', {
        
            animationSpeed: 250,
            loop: true,
            enableKeyboard: true,
            preloading: true,
        docClose: true,
        captionsData: 'alt',
        }
    );
















// galleryEl.addEventListener('click', onImgClikc)

// function onImgClikc(e) {
//     e.preventDefault()
    
//     if (e.target.nodeName !=="IMG") {
//         return
//     }
    
//      backdrop()
    
// }


// function backdrop() {
    
//     const instance = new SimpleLightbox('.gallery a', {
        
//             animationSpeed: 250,
//             loop: true,
//             enableKeyboard: true,
//             preloading: true,
//         docClose: true,
//         captionsData: 'alt',
//         }
//     );
//     return instance

// }

