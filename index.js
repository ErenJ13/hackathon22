const data = `
[
    {
      "date": "1 декабря",
      "task": "Выпить сезонный напитокв в кофейне! Тыквенный латте или пряный кофе замечательно подойдут!",
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
      "task": "",
      "img": "images/5.svg.svg"
    },
    {
      "date": "6 декабря",
      "task": "",
      "img": "images/6.svg.svg"
    },
    {
      "date": "7 декабря",
      "task": "",
      "img": "images/7.svg.svg"
    },
    {
      "date": "8 декабря",
      "task": "",
      "img": "images/8.svg.svg"
    },
    {
      "date": "9 декабря",
      "task": "",
      "img": "images/9.svg.svg"
    },
    {
      "date": "10 декабря",
      "task": "",
      "img": "images/10.svg.svg"
    },
    {
      "date": "11 декабря",
      "task": "",
      "img": "images/11.svg.svg"
    },
    {
      "date": "12 декабря",
      "task": "",
      "img": "images/12.svg.svg"
    },
    {
      "date": "13 декабря",
      "task": "",
      "img": "images/13.svg.svg"
    },
    {
      "date": "14 декабря",
      "task": "",
      "img": "images/14.svg.svg"
    },
    {
      "date": "15 декабря",
      "task": "",
      "img": "images/15.svg.svg"
    },
    {
      "date": "16 декабря",
      "task": "",
      "img": "images/16.svg.svg"
    },
    {
      "date": "17 декабря",
      "task": "",
      "img": "images/17.svg.svg"
    },
    {
      "date": "18 декабря",
      "task": "",
      "img": "images/18.svg.svg"
    },
    {
      "date": "19 декабря",
      "task": "",
      "img": "images/19.svg.svg"
    },
    {
      "date": "20 декабря",
      "task": "",
      "img": "images/20.svg.svg"
    },
    {
      "date": "21 декабря",
      "task": "",
      "img": "images/21.svg.svg"
    },
    {
      "date": "22 декабря",
      "task": "",
      "img": "images/22.svg.svg"
    },
    {
      "date": "23 декабря",
      "task": "",
      "img": "images/23.svg.svg"
    },
    {
      "date": "24 декабря",
      "task": "",
      "img": "images/24.svg.svg"
    },
    {
      "date": "25 декабря",
      "task": "",
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
  console.log(i);
  console.log(event.target);
  if (i !== -1) {
    let popup = document.createElement("section");
    popup.className = "popup";
    mainHTML.append(popup);
    popup.innerHTML = `<div>
    <img src="${tasks[i].img}" alt="Картинка с ${tasks[i].date}" />
    </div>
    <div>
    <h3 class='card__title'>${tasks[i].date}</h3>
    <p class="card__task">Задание: ${tasks[i].task}</p>
    <img src="" alt="Нажмите, чтобы закрыть окно" />
    </div>
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
