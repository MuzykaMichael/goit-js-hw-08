import SimpleLightbox from 'simplelightbox'
import "simplelightbox/dist/simple-lightbox.min.css";

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const gallery = document.querySelector(".gallery");
const galleryContainer = createGalleryItems(galleryItems);
gallery.style.listStyle = 'none'
gallery.insertAdjacentHTML('beforeend',galleryContainer);

gallery.addEventListener('click',zoomGalleryItems);

function createGalleryItems(galleryItems) {
    return galleryItems.map(({description,original,preview})=> {
    return`<li class="gallery__item">
    <a class="gallery__link" href="${original}">
       <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
 </li>`;}).join('');
   }


function zoomGalleryItems(e){
e.preventDefault();
if(e.target.nodeName !== "IMG"){
    return
} else {
const lightbox = new SimpleLightbox('.gallery__link',{
captionsData: 'alt',
captionDelay: 250,
})
gallery.removeEventListener('click', zoomGalleryItems)
};
}

