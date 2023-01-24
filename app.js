/* Imports */
import { getBands } from './fetch-utils.js';

/* Get DOM Elements */
const mainEl = document.querySelector('main');

/* State */
let bandsData = [];

/* Events */
window.addEventListener('load', () => {
    const bands = await getBands();
    bandsData = bands;

    for (let band of bandsData) {

        const bandEl = document.createElement('div');
        
    }

});

/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
