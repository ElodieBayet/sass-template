'use strict';
/**
 * @author Elodie Bayet
 */

document.documentElement.removeAttribute('class');

(() => {
    const anchors = document.querySelectorAll('.langmenu li a');

    function toggleLang(evt) {
        evt.preventDefault();
        let lang = evt.target.getAttribute('href').replace('#', '');
        document.documentElement.lang = lang;
        evt.currentTarget.blur();
        anchors.forEach(anchor => { anchor.classList.toggle('selected') });
    }

    anchors.forEach(link => { link.addEventListener('click', toggleLang) });
})();