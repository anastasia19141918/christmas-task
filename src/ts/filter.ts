export default function btnActivFillter(elements) {
  elements.forEach(function(el) {
    el.addEventListener('click', function(el){
      const click:any = el.target;
      click.classList.toggle('toys__active');
    });
  })
};




