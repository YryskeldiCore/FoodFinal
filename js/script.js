import tabs from './modules/tabs';
import timer from './modules/timer';
import modal from './modules/modal';
import cards from './modules/cards';
import form from './modules/form';
import slider from './modules/slider';
import calc from './modules/calc';
import {openModal} from './modules/modal';

window.addEventListener('DOMContentLoaded', () => {

    const timerModal = setInterval(() => openModal('.modal', timerModal), 50000);

    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    timer('.timer', '2020-08-23');
    modal('[data-modal]', '.modal', timerModal);
    cards();
    form('form', timerModal);
    slider({
        slide: '.offer__slide',
        totalCount: '#total',
        arrPrev: '.offer__slider-prev',
        arrNext: '.offer__slider-next',
        currentCount: '#current',
        container: '.offer__slider',
        field: '.offer__slider-inner',
        wrapper: '.offer__slider-wrapper'
    });
    calc();
});


