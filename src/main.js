import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { getImagesByQuery } from './js/pixabay-api.js';

import {
    createGallery,
    clearGallery,
    showLoader,
    hideLoader,
} from './js/render-functions.js';

const searchInput = document.querySelector("#searchInput")
const searchBtn = document.querySelector("#searchBtn")


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

searchBtn.addEventListener('click', (e) => {
    e.preventDefault()

    if (!searchInput.value.trim()) {
        return iziToast.error({
            position: 'topRight',
            message: 'Sorry, you have to write something in order to find something! :) Please try again!',
        });
    }

    clearGallery()

    showLoader()

    getImagesByQuery(searchInput.value)
        .then(hits => {
            if (!hits || hits.length === 0) {
                return iziToast.error({
                    position: 'topRight',
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                });
            };
            createGallery(cardsMarkup(hits))
            sl.refresh();
        })
        .catch(err => {
            console.log(err.message);
        })
        .finally(hideLoader);
})

// create pic template

function cardsMarkup(arr) {
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
