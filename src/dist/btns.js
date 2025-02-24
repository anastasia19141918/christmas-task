const btn = document.getElementById('header__navigation');
const btns = document.querySelectorAll('.header__link');
const toys = document.querySelector('.toys');
const christmasTree = document.querySelector('.christmas-tree');
btn.addEventListener('click', function (el) {
    const click = el.target;
    btns.forEach(function (e) {
        e.classList.remove('header__link_active');
    });
    if (click.classList.contains('header__link')) {
        click.classList.add('header__link_active');
    }
    ;
    getSection(click.innerText);
});
function getSection(element) {
    if (element === 'Игрушки') {
        toys.classList.add('toys__main__active');
        christmasTree.classList.remove('christmas-tree__main__active');
    }
    ;
    if (element === 'Ёлка') {
        christmasTree.classList.add('christmas-tree__main__active');
        toys.classList.remove('toys__main__active');
    }
}
