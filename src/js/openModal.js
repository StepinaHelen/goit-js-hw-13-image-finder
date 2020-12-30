import refs from './refs.js'
import "basiclightbox/dist/basicLightbox.min.css";
import * as basicLightbox from 'basiclightbox'




refs.listContainer.addEventListener("click", openModal )
function openModal(event) {
     event.preventDefault();
    if (event.target.nodeName !== "IMG") {
        // console.log("кликнули не по картинке")
        return
    }
    const imgTarget = event.target
    const largeImg = imgTarget.dataset.source;
    const instance = basicLightbox.create(` <img src=${largeImg} >`)
    instance.show()
}
 
