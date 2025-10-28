'use strict';
/**
 * @author Elodie Bayet
 */

/**
 * @param {Object} form HTML form element
 * @param {Object} chrono HTML element for display
 */
class ChronoView {
    
    constructor(chrono) {
        this._chrono = chrono;
    
        this._start = document.querySelector('#start');
        this._resume = document.querySelector('#resume');
        this._minutes = chrono.querySelector('#minutes');
        this._seconds = chrono.querySelector('#seconds');
    }

    enableChrono() {
        this._resume.classList.add('disabled');
        this._start.innerHTML = 'Lancer';
        this._start.setAttribute('data-action', 'start');
        this._chrono.classList.remove('break');
    }

    displayChrono(minutes, seconds) {
        this._minutes.textContent = this._format(minutes);
        this._seconds.textContent = this._format(seconds);
    }

    bindChornoControl(run, reset) {
        this._start.addEventListener('click', evt => {
            let start = 'start' === evt.target.getAttribute('data-action');
            run(start);
            this._active(start);
        });

        this._resume.addEventListener('click', evt => {
            reset();
        });
    }

    _active(isRunning) {
        this._resume.classList.remove('disabled');
        
        if (true === isRunning) {
            this._start.innerHTML = 'Interrompre';
            this._chrono.classList.remove('break');
            this._start.setAttribute('data-action', 'suspend');
        } else {
            this._start.innerHTML = 'Poursuivre';
            this._chrono.classList.add('break');
            this._start.setAttribute('data-action', 'start');
        }
    }

    /**
     * @param {number} value
     * @returns {string}
     */
    _format(value) {
        return (value < 10)? `0${value}` : `${value}`;
    }
}

export default ChronoView;