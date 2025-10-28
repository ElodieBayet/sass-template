'use strict';
/**
 * @author Elodie Bayet
 */

/**
 * Manage Filter Component
 * @param {Array} togglers Collection of HTML elements that toggle filtering
 * @param {Object} reseter HTML element that reset all filters
 * @param {Object} targets Collection of HTML elements that get hidden or not
 */
class FilterView {

    constructor(togglers, reseter, targets) {
        this._togglers = togglers;
        this._reseter = reseter
        this._targets = [...targets];
        this._filter = {};
        this._register = {};

        this._togglers.forEach(link => {
            link.addEventListener('click', this.handleToggling);

            let ref = link.getAttribute('href').substr(1);
            if (!Array.isArray(this._register[ref])) {
                this._register[ref] = this._targets.filter(target => target.getAttribute('data-filter').search(ref) > -1);
            }
        });

        this._filter = this.filterManager(this.handleInitial, this.handleReset);
    }

   /**
    * @param {Function} oninit - Action on init filters
    * @param {Function} onempty - Action on empty filters
    */
    filterManager = (oninit, onempty) => {
        let _storage = [];
        let _oninit = () => oninit();
        let _onempty = () => onempty();
        return {
            empty : () => {
                _storage = [];
            },
            remove : key => {
                _storage.splice(_storage.indexOf(key), 1);
                if (_storage.length === 0) {
                    _onempty()
                };
            },
            insert : key => {
                if (_storage.length === 0) {
                    _oninit();
                }
                _storage.push(key);
            },
            stored : () => _storage
        }
    }

    /**
     * @param {Event} evt - Event object from triggered filter-toggler
     */
    handleToggling = evt => {
        evt.preventDefault();
        let ref = evt.currentTarget.getAttribute('href').substr(1);
        if (evt.currentTarget.classList.contains('selected')) {
            evt.currentTarget.classList.remove('selected');
            this._register[ref].forEach(target => target.classList.add('hide'));
            this._filter.remove(ref);
        } else {
            evt.currentTarget.classList.add('selected');
            this._filter.insert(ref);
            this._register[ref].forEach(target => target.classList.remove('hide'));
        }
    }

    /**
     * @param {Boolean} status - Determiner to enable or disable filter-reseter
     */
    toggleReseter = status => {
        if (status) {
            this._reseter.addEventListener('click', this.handleReset);
        } else {
            this._reseter.removeEventListener('click', this.handleReset);
        }
        this._reseter.classList.toggle('disabled', !status);
    }

    handleInitial = () => {
        for (let target of this._targets) {
            target.classList.add('hide');
        }
        this.toggleReseter(true);
    }

    handleReset = () => {
        for (let target of this._targets) {
            target.classList.remove('hide');
        }
        this._togglers.forEach( toggle => toggle.classList.remove('selected') );
        this._filter.empty();
        this.toggleReseter(false);
    }
}

export default FilterView