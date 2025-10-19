import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import axios from "axios";

import { getImagesByQuery } from './js/pixabay-api.js';

import {
    createGallery,
    clearGallery,
    showLoader,
    hideLoader,
} from './js/render-functions.js';

const searchInput = document.querySelector("#searchInput")
const searchBtn = document.querySelector("#searchBtn")
const gallery = document.querySelector("#gallery")

searchBtn.addEventListener('click', (e) => {
    e.preventDefault()
    getImagesByQuery(searchInput.value)
})