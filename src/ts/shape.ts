import data from './balls.js';

const cards = document.getElementById('cards');

function cardShape() {
  data.forEach(function(el) {
    creat(el);
  })
};

function creat(el) {
  let card = document.createElement('div');
  card.classList.add('card');

  let title = document.createElement('h2');
  title.classList.add('card__title');
  title.textContent = el.name;

  let information = document.createElement('div');
  information.classList.add('card__information');

  let img = document.createElement('img');
  img.classList.add('card__img');
  img.src = el.img;
  img.alt = el.name;

  let desk = document.createElement('div');
  desk.classList.add('card__desk');

  let count = document.createElement('p');
  count.classList.add('card__text');
  count.textContent = 'Количество:';
  let countSpan = document.createElement('span');
  countSpan.innerText = el.count;

  let year = document.createElement('p');
  year.classList.add('card__text');
  year.textContent = 'Год покупки:';
  let yearSpan = document.createElement('span');
  yearSpan.innerText = el.year;

  let shape = document.createElement('p');
  shape.classList.add('card__text');
  shape.textContent = 'Форма:';
  let shapeSpan = document.createElement('span');
  shapeSpan.innerText = el.shape;

  let color = document.createElement('p');
  color.classList.add('card__text');
  color.innerText = 'Цвет:';
  let colorSpan = document.createElement('span');
  colorSpan.innerText = el.color;

  let size = document.createElement('p');
  size.classList.add('card__text');
  size.innerText = 'Размер:';
  let sizeSpan = document.createElement('span');
  sizeSpan.innerText = el.size;

  let favorite = document.createElement('p');
  favorite.classList.add('card__text');
  favorite.innerText = 'Любимая:';
  let favoriteSpan = document.createElement('span');
  favoriteSpan.innerText = el.favorite;
  if(favoriteSpan.innerText ===  'false') {
    favoriteSpan.innerText = 'Нет';
  };
  if (favoriteSpan.innerText ===  'true') {
    favoriteSpan.innerText = 'Да';
  };

  let ribbon = document.createElement('div');
  ribbon.classList.add('card__favorite');

  cards.appendChild(card);
  card.appendChild(title);
  card.appendChild(information);
  card.appendChild(ribbon);

  information.appendChild(img);
  information.appendChild(desk);

  desk.appendChild(count);
  desk.appendChild(year);
  desk.appendChild(shape);
  desk.appendChild(color);
  desk.appendChild(size);
  desk.appendChild(favorite);

  count.appendChild(countSpan);
  year.appendChild(yearSpan);
  shape.appendChild(shapeSpan);
  color.appendChild(colorSpan);
  size.appendChild(sizeSpan);
  favorite.appendChild(favoriteSpan);
};

window.addEventListener('load', cardShape)

