export default function btnActivFillter(elements) {
    elements.forEach(function (el) {
        el.addEventListener('click', function (el) {
            const click = el.target;
            click.classList.toggle('toys__active');
        });
    });
}
;
