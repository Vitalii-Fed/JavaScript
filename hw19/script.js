const API_URL = 'https://jsonplaceholder.typicode.com/photos?_limit=10';
const galleryEl = $('#galleryTemplate');
const photosTemplate = `<img data-img-id="{{id}}" src="{{url}}" alt="img">`
let photoList = [];

fetchPhotoList();


function fetchPhotoList() {
    fetch(API_URL)
    .then((resp) => resp.json())
    .then((data) => {
        photoList = data;
        renderList(photoList);
    })
}

function fetchPhotoList() {
        fetch(API_URL)
        .then((resp) => resp.json())
        .then((data) => {
            photoList = data;
            renderList(photoList);
        })
}

function renderList(list) {
    const photos = list.map(generatePhotoHtml).join('');

    return galleryEl.append(photos);
}

function generatePhotoHtml(item) {
    return interpolate(photosTemplate, item);
}