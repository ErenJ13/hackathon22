"use strict";

const data = `
[
    {
      "date": "1 декабря",
      "task": "Выпить сезонный напиток в кофейне! Тыквенный латте или пряный кофе замечательно подойдут!",
      "img": "images/1.svg.svg"
    },
    {
      "date": "2 декабря",
      "task": "Повесить новогоднюю гирлянду! Праздник к нам приходит~",
      "img": "images/2.svg.svg"
    },
    {
      "date": "3 декабря",
      "task": "Устроить вечер настольных игр с друзьями! Ура посиделкам и чаепитию~",
      "img": "images/3.svg.svg"
    },
    {
      "date": "4 декабря",
      "task": "Съездить в Альпака Парк! Ну снега ещё нет, а альпаки есть :)",
      "img": "images/4.svg.svg"
    },
    {
      "date": "5 декабря",
      "task": "Вырезать новогоднюю снежинку и украсить ею окно!",
      "img": "images/5.svg.svg"
    },
    {
      "date": "6 декабря",
      "task": "Перебрать одежду в шкафу) Ненужные и нелюбимые отдать на утилизацию или сдать на благотворительность~",
      "img": "images/6.svg.svg"
    },
    {
      "date": "7 декабря",
      "task": "Сварить какао и добавить туда маршмеллоу~",
      "img": "images/7.svg.svg"
    },
    {
      "date": "8 декабря",
      "task": "И вдруг на горизонте появляются мандарины! А нет, это хурма~ Время витаминов~",
      "img": "images/8.svg.svg"
    },
    {
      "date": "9 декабря",
      "task": "Купить себе классный новогодний аксессуар! Или даже наряд",
      "img": "images/9.svg.svg"
    },
    {
      "date": "10 декабря",
      "task": "Погулять в городе и насладиться атмосферой спокойствия, потому что потом будет явно не до этого",
      "img": "images/10.svg.svg"
    },
    {
      "date": "11 декабря",
      "task": "Составить список подарков! А если уже есть, то пора их покупать",
      "img": "images/11.svg.svg"
    },
    {
      "date": "12 декабря",
      "task": "Сварить глинтвейн. Может на улице уже холодно, может нет, но глинтвейн придаст атмосферы",
      "img": "images/12.svg.svg"
    },
    {
      "date": "13 декабря",
      "task": "Время подчистить подписки! В Новый год вступать только с теми, которые вам нужны",
      "img": "images/13.svg.svg"
    },
    {
      "date": "14 декабря",
      "task": "Нарядиться в свой самый зимний свитер! Пусть он будет теплым и уютным",
      "img": "images/14.svg.svg"
    },
    {
      "date": "15 декабря",
      "task": "Позвони или напиши важным людям, просто так",
      "img": "images/15.svg.svg"
    },
    {
      "date": "16 декабря",
      "task": "Посмотреть новогодний фильм :) Можно просто самый любимый",
      "img": "images/16.svg.svg"
    },
    {
      "date": "17 декабря",
      "task": "Провести время с животными! Нет своего питоммца? Сходи в котокафе или в «Хаски Лэнд», а может просто наведайся к кому-то в гости",
      "img": "images/17.svg.svg"
    },
    {
      "date": "18 декабря",
      "task": "Целый день не вылезай из кровати и позволь себе расслабиться",
      "img": "images/18.svg.svg"
    },
    {
      "date": "19 декабря",
      "task": "Потанцуй вечером! Включи плейлист, свой или подборку, и подвигай телом!",
      "img": "images/19.svg.svg"
    },
    {
      "date": "20 декабря",
      "task": "Приготовь имбирное печенье! Его можно разукрасить, а можно съесть просто так",
      "img": "images/20.svg.svg"
    },
    {
      "date": "21 декабря",
      "task": "Купить себе теплые носочки. Держи ноги в тепле!",
      "img": "images/21.svg.svg"
    },
    {
      "date": "22 декабря",
      "task": "Немного рано, но время ставить ёлку и водить хороводы",
      "img": "images/22.svg.svg"
    },
    {
      "date": "23 декабря",
      "task": "Упакуй подарки заранее, чтобы потом не носиться в предновогодней суете",
      "img": "images/23.svg.svg"
    },
    {
      "date": "24 декабря",
      "task": "Покатайся на катке, одна или с кем-то. Почувствуй зиму!",
      "img": "images/24.svg.svg"
    },
    {
      "date": "25 декабря",
      "task": "Время составлять планы. Хотя нет, можно просто написать письмо себе в будущее)",
      "img": "images/25.svg.svg"
    }
  ]`;

let tasks = JSON.parse(data);
console.log(tasks);

// создать json
// const jsonFunc = function () {
//   for (let i = 1; i < 26; i++) {
//     let json = "";
//     json += `{
//         "date": "${i} декабря",
//         "task": "",
//         "img": "images/${i}.svg.svg"
//     },`;
//     console.log(json);
//   }
// };

// console.log(jsonFunc());

const body = document.querySelector("body");
const container = document.querySelector(".container");
const mainHTML = document.querySelector("main");

const createDays = function () {
  let dayCards = "";
  for (let i = 0; i < tasks.length; i++) {
    dayCards += `<div class="day day-${i}">
    <div><img src="${tasks[i].img}" alt="Это карточка ${tasks[i].date}" /></div>
    </div>`;
  }
  container.innerHTML = dayCards;
  container.addEventListener("click", createDayCard);
};

const createDayCard = function (event) {
  const dayCard = Array.from(document.querySelectorAll(".day")); // создаем массив из карточек, которые находятся внутри контейнера
  let i = dayCard.indexOf(event.target);
  console.log(dayCard);
  console.log(i);
  console.log(event.target);
  if (i !== -1) {
    let popup = document.createElement("section");
    popup.className = "popup";
    mainHTML.append(popup);
    popup.innerHTML = `<div>
    <img src="${tasks[i].img}" alt="Картинка с ${tasks[i].date}" />
    </div>
    <div class="card__text">
    <h2 class='card__title'>${tasks[i].date}</h2>
    <p class="card__task">Задание: ${tasks[i].task}</p>
    <button class="button"  onclick = "alert('Молодец! Ты отлично справилась:)')">Готово!</button>
    </div>`;
    createOverlay();
    container.removeEventListener("click", createDayCard);
    container.addEventListener("click", closeDayCard);
  }
};

const closeDayCard = function (event) {
  const popup = document.querySelector(".popup");
  const overlay = document.querySelector(".overlay");

  if (event.target === overlay || event.currentTarget === container) {
    popup.remove();
    overlay.remove();
    container.addEventListener("click", createDayCard);
    container.removeEventListener("click", closeDayCard);
  }
};

const createOverlay = function (event) {
  const overlay = document.createElement("div");
  overlay.className = "overlay";
  body.prepend(overlay);
  overlay.addEventListener("click", closeDayCard);
  container.addEventListener("click", closeDayCard);
};

document.addEventListener("DOMContentLoaded", createDays);
