import { galleryItems } from './gallery-items.js';
// Change code below this line



console.log(galleryItems);


const galleryEl = document.querySelector(".gallery")
// console.log(galleryEl)

function addGalleryMarkup(gallery) {
    return gallery.map(el => 
        `
        <div class="gallery__item">
            <a class="gallery__link" href="${el.original}">
                <img

                class="gallery__image lazyload"
                data-src=${el.preview}
                data-source="${el.original}"
                alt="${el.description}"
                />
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
        console.log(e.target.className)
}



// let mouseMuve = 0;

// window.addEventListener('mousemove', _.debounce(onMouseMuve, 800))

// function onMouseMuve(e) {
//     mouseMuve += 1
//     console.log(`Количество вызовов ${mouseMuve},
//     X: ${e.clientX},
//     y: ${e.clientY},
//     `)
// }