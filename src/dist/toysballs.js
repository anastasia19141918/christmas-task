import btnActivFillter from './filter.js';
const toysBall = document.querySelectorAll('.toys__ball');
const card = document.querySelectorAll('.card');
function fil() {
    console.log(card);
    card.forEach(function (el) {
        el.classList.add('toys__active');
    });
}
;
fil();
btnActivFillter(toysBall);
