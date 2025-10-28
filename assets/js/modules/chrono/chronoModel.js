'use strict';
/**
 * @author Elodie Bayet
 */

class ChronoModel {

    constructor() {
        this._cache = 9;
        this._total = 0;
    }

    get total() {
        return this._total;
    }

    /**
     * @param {number} total
     */
    set total(total) {
        this._total = isNaN(total) ? 0 : total;
        if (0 > total) {
            this.timeElapsed();
        }
    }

    /**
     * @param {Function} callback 
     */
    bindTimeElapsed(callback) {
        this.timeElapsed = callback
    }

    assignFromCache() {
        this._total = this._cache;
    }
}

export default ChronoModel;