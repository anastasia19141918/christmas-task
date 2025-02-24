const btn = document.getElementById('header__navigation');
const btns = document.querySelectorAll('.header__link');
btn.addEventListener('click', function (el) {
    const click = el.target;
    btns.forEach(function (e) {
        e.classList.remove('header__link_active');
    });
    if (click.classList.contains('header__link')) {
        click.classList.add('header__link_active');
    }
    ;
});
