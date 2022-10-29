const data = `
[
    {
      "date": "1 декабря",
      "task": "",
      "img": "assets/"
    },
    {
      "date": "2 декабря",
      "task": "",
      "img": "assets/"
    },
    {
      "date": "3 декабря",
      "task": "",
      "img": "assets/"
    },
    {
      "date": "4 декабря",
      "task": "",
      "img": "assets/"
    },
    {
      "date": "5 декабря",
      "task": "",
      "img": "assets/"
    },
    {
      "date": "6 декабря",
      "task": "",
      "img": "assets/"
    },
    {
      "date": "7 декабря",
      "task": "",
      "img": "assets/"
    },
    {
      "date": "8 декабря",
      "task": "",
      "img": "assets/"
    },
    {
      "date": "9 декабря",
      "task": "",
      "img": "assets/"
    },
    {
      "date": "10 декабря",
      "task": "",
      "img": "assets/"
    },
    {
      "date": "11 декабря",
      "task": "",
      "img": "assets/"
    },
    {
      "date": "12 декабря",
      "task": "",
      "img": "assets/"
    },
    {
      "date": "13 декабря",
      "task": "",
      "img": "assets/"
    },
    {
      "date": "14 декабря",
      "task": "",
      "img": "assets/"
    },
    {
      "date": "15 декабря",
      "task": "",
      "img": "assets/"
    },
    {
      "date": "16 декабря",
      "task": "",
      "img": "assets/"
    },
    {
      "date": "17 декабря",
      "task": "",
      "img": "assets/"
    },
    {
      "date": "18 декабря",
      "task": "",
      "img": "assets/"
    },
    {
      "date": "19 декабря",
      "task": "",
      "img": "assets/"
    },
    {
      "date": "20 декабря",
      "task": "",
      "img": "assets/"
    },
    {
      "date": "21 декабря",
      "task": "",
      "img": "assets/"
    },
    {
      "date": "22 декабря",
      "task": "",
      "img": "assets/"
    },
    {
      "date": "23 декабря",
      "task": "",
      "img": "assets/"
    },
    {
      "date": "24 декабря",
      "task": "",
      "img": "assets/"
    },
    {
      "date": "25 декабря",
      "task": "",
      "img": "assets/"
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
//         "img": "assets/"
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
