'use strict';
/**
 * @author Elodie Bayet
 */

import GUIService from '../lib/guiService.js';
import TaskView from './task/taskView.js';

(() => {
    try {
        const view = new TaskView(
            document.querySelector('#task')
        );
    } catch (error) {
        GUIService.moduleError('Tâches', document.querySelector('#task'));
        console.info(`Erreur dans le module 'Task' : "${error.message}"`);
    }
})();