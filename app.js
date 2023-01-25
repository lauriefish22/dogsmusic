/* Imports */
import { getBands } from './fetch.utils.js';

/* Get DOM Elements */
const mainEl = document.querySelector('main');

/* State */
let bandsData = [];

/* Events */
window.addEventListener('load', async () => {
    const bands = await getBands();

    bandsData = bands;
    console.log(bandsData);
    //displayBands();
});

for (let band of bandsData) {
    const bandEl = document.createElement('div');
    const bandNameEl = document.createElement('p');
    const leadSingerEl = document.createElement('p');
    const albumNameEl = document.createElement('p');

    bandNameEl.textContent = band.name;
    leadSingerEl.textContent = band.leadSinger;
    albumNameEl.textContent = band.albumName;

    // bandEl.append(bandNameEl, leadSingerEl, albumNameEl);
    // mainEl.append(bandEl);
    // getBands();

    //mainEl.textContent = '';
}
