'use strict';
/**
 * @author Elodie Bayet
 */

/**
 * Manage Scrolling inside Page
 * @param {Array} triggers HTML elements List that trigger scrolling effect
 * @param {Object} header Header HTML element
 */
 class ScrollManager {

    constructor(triggers, header) {
        this._triggers = triggers;
        this._header = header;

        this._triggers.forEach(trigger => trigger.addEventListener('click', this.adjustScroll));
    }

    /**
     * @param {Event} evt
     */
    adjustScroll = evt => {
        evt.preventDefault();
        let href = evt.target.getAttribute('href').match(/^#[a-z0-9]{1,}/);
        let section = href ? document.querySelector(href) : null;
        if (section) {
            let destination = (section.offsetParent.offsetTop + section.offsetTop) - this._header.offsetHeight;
            window.scrollTo(0, destination);
        }
        evt.currentTarget.blur();
    }
}

export default ScrollManager;