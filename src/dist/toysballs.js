import btnActivFillter from './filter.js';
import data from './balls.js';
import creat from './shape.js';
const toysBall = document.querySelectorAll('.toys__ball');
const cardsBlock = document.querySelector('.cards');
function filterToys() {
    toysBall.forEach(function (button) {
        button.addEventListener('click', function (el) {
            cardsBlock.innerHTML = "";
            const btnCategory = button.dataset.filter;
            filter(btnCategory, button);
        });
    });
}
function filter(category, button) {
    data.filter(function (card) {
        if (category === 'шар') {
            if (button.classList.contains('toys__active')) {
                if (card.shape === 'шар') {
                    creat(card);
                }
            }
            ;
            if (!button.classList.contains('toys__active')) {
                creat(card);
            }
        }
        ;
        /*if(category === 'колокольчик') {
          
        };
        if(category === 'шишка') {
          
        };
        if(category === 'снежинка') {
          
        };
        if(category === 'фигурка') {
          
        };*/
    });
}
btnActivFillter(toysBall);
filterToys();
