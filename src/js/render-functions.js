import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

let sl = new SimpleLightbox('.gallery a', {
    sourceAttr: 'href',
    overlay: true,
    overlayOpacity: 0.9,
    spinner: true,
    nav: true,
    navText: ['<', '>'],
    captions: true,
    captionsData: 'alt',
    captionSelector: 'img',
    captionDelay: 150,
    showCounter: true,
    scrollZoom: true,
    close: true,
});

const loader = document.querySelector('#loader')
const gallery = document.querySelector('.gallery');



function createGallery(images) {
    gallery.insertAdjacentHTML('afterbegin', createCardsMarkup(images));
    sl.refresh();
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


function createCardsMarkup(arr) {
    return arr.map(({ largeImageURL, webformatURL, tags, likes, views, comments, downloads }) => `
    <li class="gallery-item">
        <a class="gallery-link" href="${largeImageURL}">
            <img
                width="360"
                height="200"
                class="gallery-image"
                src="${webformatURL}"
                alt="${tags}"
            />
        </a>
        <ul>
            <li>Likes: ${likes}</li>
            <li>Views: ${views}</li>
            <li>Comments: ${comments}</li>
            <li>Downloads: ${downloads}</li>
        </ul>
    </li>`).join('\n')
}
