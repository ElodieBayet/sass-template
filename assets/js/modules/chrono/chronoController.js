'use strict';
/**
 * @author Elodie Bayet
 */

class ChronoController {

    constructor(model, view) {
        this._model = model;
        this._view = view;
        this._interval = null;

        this._model.bindTimeElapsed(this._reset);
        this._view.bindChornoControl(this._run, this._reset);

        this._reset();
    }

    /**
     * @param {boolean} start
     */
    _run = (start) => {
        if (true === start) {
            this._interval = setInterval(() => {
                this._model.total--;
                this._view.displayChrono(...this._convert(this._model.total));
            }, 1000);
        } else {
            clearInterval(this._interval);
        }
    }

    _reset = () => {
        clearInterval(this._interval);
        this._model.assignFromCache();
        this._view.displayChrono(...this._convert(this._model.total));
        this._view.enableChrono();
    }

    /**
     * @param {number} total Seconds
     * @returns {Array} Minutes and seconds
     */
    _convert(total) {
        return [parseInt(total / 60), total % 60];
    }
}

export default ChronoController;