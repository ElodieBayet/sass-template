'use strict';
/**
 * @author Elodie Bayet
 */

/**
 * @param {Object} list HTML element
 */
class TaskView {

	constructor(ul) {
		this._ul = ul;
		
		this._enable();
	}

	_enable() {
		this._ul.addEventListener('change', (evt) => {
			if (evt.target.type === 'checkbox') {
				const span = evt.target.parentElement.querySelector('span');
				if (evt.target.checked) {
                    span.innerHTML = `<s>${span.innerText}</s>`;
				} else {
                    span.innerHTML = span.innerText;
				}
			}
		});
	}
}

export default TaskView;