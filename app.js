/* Imports */
import { getBands } from './fetch.utils.js';

/* Get DOM Elements */
const mainEl = document.querySelector('.main');

/* State */
let bandsData = [];

/* Events */
window.addEventListener('load', async () => {
    const bands = await getBands();
    console.log(bands);

    bandsData = bands;

    displayBands();
});
function displayBands() {
    for (let band of bandsData) {
        const bandEl = document.createElement('div');
        const bandNameEl = document.createElement('p');
        const leadSingerEl = document.createElement('p');
        const albumNameEl = document.createElement('p');

        bandNameEl.textContent = bands.name;
        leadSingerEl.textContent = bands.lead_id;
        albumNameEl.textContent = bands.album;

        bandEl.append(bandNameEl, leadSingerEl, albumNameEl);
        mainEl.append(bandEl);
    }
    return mainEl;
}
