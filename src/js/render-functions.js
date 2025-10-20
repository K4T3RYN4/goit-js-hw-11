
const loader = document.querySelector('#loader')

function createGallery(images) {
    gallery.insertAdjacentHTML('afterbegin', images);
}

function clearGallery() {
    gallery.innerHTML = '';
}

function showLoader() {
    loader.classList.remove('hidden')
}

function hideLoader() {
    loader.classList.add('hidden')
}

export { createGallery, clearGallery, showLoader, hideLoader };
