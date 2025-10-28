'use strict';
/**
 * @author Elodie Bayet
 */

/**
 * Manage UI Header with navigation blocs
 * @param {Object} container HTML element that contains triggers and receptor, and hold class '.closed'
 * @param {Array} triggers Collection of HTML elements that triggers opening/closing receptor
 * @param {Object} receptor HTML element that recepts opening/closing action
 */
class HeaderManager {

    constructor(container, trigger, receptor) {
        this._container = container;
        this._trigger = trigger;
        this._receptor = receptor;

        this._trigger.addEventListener('click', this.handleClosing);
    }

    autoCompute = () => {
        if (window.innerWidth < 960) {
            let isOpened = !this._container.classList.contains('closed');
            this._receptor.style.height = this.setHeight(isOpened) + 'px';
        } else {
            if (this._receptor.hasAttribute('style')) this._receptor.removeAttribute('style');
        }
    }

    autoClose = () => {
        if (window.innerWidth < 960) {
            let isClosed = this._container.classList.contains('closed');
            this._receptor.style.height = this.setHeight(isClosed) + 'px';
            this._container.classList.toggle('closed');
        }
    }
    
    /**
     * @param {boolean} compute Compute height or set 1px
     * @returns {number}
     */
    setHeight = compute => {
        let height = 1;

        if (compute) {
            for (let child of this._receptor.children) {
                height += child.offsetHeight;
            }
        }

        return height;
    }

    handleClosing = () => {
        let isClosed = this._container.classList.contains('closed');
        this._receptor.style.height = this.setHeight(isClosed) + 'px';
        this._container.classList.toggle('closed');
    }
}

export default HeaderManager;