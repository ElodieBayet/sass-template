'use strict';
/**
 * @author Elodie Bayet
 */

import GUIService from './lib/guiService.js';
import HeaderManager from './lib/headerManager.js';

// Remove class '.nojs'
document.documentElement.removeAttribute('class');

/** @global Get HTML Element of this script */
const jsMain = document.querySelector('#jsMain');

/** @global Define source for demo or official */
const source = (location.pathname.search(/sass-template/) > -1) || (location.hostname === '127.0.0.1' || location.hostname === 'localhost') ? './' : 'https://demo.elodiebayet.com/sass-template/';

(() => {
	const isDevelopment = location.hostname === '127.0.0.1' || location.hostname === 'localhost';
	const uihead = document.querySelector('#uihead');

	if (null !== uihead) {
		try {
			const headerManager = new HeaderManager(
				uihead,
				document.querySelector('#uihead button'),
				document.querySelector('#uihead .navigation')
			);

			GUIService.delayedResizer(headerManager.autoCompute);
		} catch (error) {
			if (true === isDevelopment) {
				console.error(error);
			}
			GUIService.moduleError('Menu');
		}
	}
})();

/** Filter Module */
((filter) => {
	if (null !== filter && 'noload' !== filter.getAttribute('data-module')) {
		const node = document.createElement('script');
		node.src = source + 'assets/js/modules/filter.js';
		node.type = 'module';
		jsMain.after(node);
	}
})(document.querySelector('#filter'));

/** Task Module */
((task) => {
	if (null !== task) {
		const node = document.createElement('script');
		node.src = source + 'assets/js/modules/task.js';
		node.type = 'module';
		jsMain.after(node);
	}
})(document.querySelector('#task'));

/** Chrono Module */
((chrono) => {
	if (null !== chrono) {
		const node = document.createElement('script');
		node.src = source + 'assets/js/modules/chrono.js';
		node.type = 'module';
		jsMain.after(node);
	}
})(document.querySelector('#chrono'));
