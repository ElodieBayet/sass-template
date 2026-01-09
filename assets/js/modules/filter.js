'use strict';
/**
 * @author Elodie Bayet
 */

import GUIService from 'https://demo.elodiebayet.com/warehouse/js/services/guiService.js'; 
import FilterView from './filter/filterView.js';

(() => {
    const togglers = document.querySelectorAll('#filter a.toggle:not(.disabled)');
    const reseter = document.querySelector('#filter a[href="#reseter"]');
    const targets = document.querySelectorAll('[data-filter]');

    try {
        const filter = new FilterView(togglers, reseter, targets);
    } catch (error) {
        GUIService.moduleError('Filtre', document.querySelector('#filter'));
        console.info(`Erreur dans le module 'Filter' : "${error.message}"`);
    }
})();