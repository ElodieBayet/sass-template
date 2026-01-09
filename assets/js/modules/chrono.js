'use strict';
/**
 * @author Elodie Bayet
 */

import GUIService from 'https://demo.elodiebayet.com/warehouse/js/services/guiService.js'; 
import ChronoController from "./chrono/chronoController.js";
import ChronoModel from "./chrono/chronoModel.js";
import ChronoView from "./chrono/chronoView.js";

(() => {
	try {
        const view = new ChronoView(
            document.querySelector('#chrono')
        );
        const model = new ChronoModel();
	    const time = new ChronoController(model, view);
    } catch (error) {
        GUIService.moduleError('Chrono', document.querySelector('#chrono'));
        console.info(`Erreur dans le module 'Chrono' : "${error.message}"`);
    }
})();
