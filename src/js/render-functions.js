
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// functions

function createGallery(images) {
    gallery.insertAdjacentHTML('afterbegin', images)
}

function clearGallery() {
    gallery.innerHTML = ''
}

function showLoader() {

}

function hideLoader() {

}

export { createGallery, clearGallery, showLoader, hideLoader };
