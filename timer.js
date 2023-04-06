// Написати таймер зворотнього відліку до Нового року який можна зупиняти при кліку на кнопку **Stop**

// /*
//     1. створимо дату наступного Нового року, до якого будемо рахувати час
//     2. отримати поточну дату
//     3. від дати Нового року відняти поточну дату, таким чином ми отримаємо кількість мілісекунд, яка лишилась до Нового року
//     4. З нашої різниці витягнути дні, години, хвилини і секунди
//     5. Показати результат на екрані
//     6. Запустити сет інтервал, який буде оновлювати час кожну секунду
// */

//Варіант 1 з двома кнопками

// const refs = {
//   timer: document.getElementById("timer"),
//   stopBtn: document.getElementById("stopBtn"),
//   startBtn: document.getElementById("startBtn"),
// }; //отримуємо посилання на елементи з якими ми будемо працювати

// //1. створимо дату наступного Нового року, до якого будемо рахувати час
// const countDownDate = new Date(`Jan 1, ${new Date().getFullYear() + 1}`);
// //console.log(countDownDate); //Mon Jan 01 2024 00:00:00 GMT+0200 (Eastern European Standard Time)

// refs.stopBtn.addEventListener("click", stopTimer); //обробник подій, щоб при натисканні на stop  таймер зупинявся
// refs.startBtn.addEventListener("click", startTimer); //обробник подій, щоб при натисканні на start таймер запустився

// countDownTimeToNY();
// //6. Запустити сет інтервал, який буде оновлювати час кожну секунду
// let timerId = setInterval(countDownTimeToNY, 1000);

// function countDownTimeToNY() {
//   const now = new Date(); //2. отримати поточну дату
//   //console.log(now); //1680776509381 - кількість мілісекунд з 70 року. То і є поточна дата

//   const different = countDownDate - now; //від дати Нового року ми відмінусуємо поточну дату
//   //console.log(different); //3. від дати Нового року відняти поточну дату, таким чином ми отримаємо кількість мілісекунд, яка лишилась до Нового року

//   //4. З нашої різниці витягнути дні, години, хвилини і секунди
//   const days = Math.floor(different / (1000 * 60 * 60 * 24)); //24 - це годин в одному дні, 60 хв в одній години, 60 хв в одній годині, 1000 сек в 1 хв
//   const hours = Math.floor((different / (1000 * 60 * 60)) % 24);
//   const minutes = Math.floor((different / (1000 * 60)) % 60);
//   const seconds = Math.floor((different / 1000) % 60);

//   //5. Показати результат на екрані
//   refs.timer.textContent = `${days} days ${addZero(hours)} hours ${addZero(
//     minutes
//   )} minutes ${addZero(seconds)} seconds`;
// }

// //Ф-ція яка потрібна для зупинки інтервала
// function stopTimer() {
//   clearInterval(timerId);
//   refs.stopBtn.disabled = true;
//   refs.startBtn.disabled = false;
// }

// function startTimer() {
//   let timerId = setInterval(countDownTimeToNY, 1000);
//   refs.stopBtn.disabled = false;
//   refs.startBtn.disabled = true;
// }

// //Ф-ція яка додає до хвилин, годин і секунд нуль
// function addZero(number) {
//   return String(number).padStart(2, 0);
// }

//_________________________________________________________________//

//Варіант 2 з одною кнопкою

//створюємо змінну, налаштування наших кнопок
const BUTTON_UI = {
  activeBtn: "stop",
  start: {
    text: "start",
    class: "start",
  },
  stop: {
    text: "stop",
    class: "stop",
  },
};

//отримуємо посилання на елементи з якими ми будемо працювати
const refs = {
  timer: document.getElementById("timer"),
  btn: document.getElementById("btn"),
};

//1. створимо дату наступного Нового року, до якого будемо рахувати час
const countDownDate = new Date(`Jan 1, ${new Date().getFullYear() + 1}`);
//console.log(countDownDate); //Mon Jan 01 2024 00:00:00 GMT+0200 (Eastern European Standard Time)

refs.btn.addEventListener("click", handleButtonClick); //обробник подій, щоб при натисканні на stop  таймер зупинявся

countDownTimeToNY();
//6. Запустити сет інтервал, який буде оновлювати час кожну секунду
let timerId = setInterval(countDownTimeToNY, 1000);

function countDownTimeToNY() {
  const now = new Date(); //2. отримати поточну дату
  //console.log(now); //1680776509381 - кількість мілісекунд з 70 року. То і є поточна дата

  const different = countDownDate - now; //від дати Нового року ми відмінусуємо поточну дату
  //console.log(different); //3. від дати Нового року відняти поточну дату, таким чином ми отримаємо кількість мілісекунд, яка лишилась до Нового року

  //4. З нашої різниці витягнути дні, години, хвилини і секунди
  const days = Math.floor(different / (1000 * 60 * 60 * 24)); //24 - це годин в одному дні, 60 хв в одній години, 60 хв в одній годині, 1000 сек в 1 хв
  const hours = Math.floor((different / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((different / (1000 * 60)) % 60);
  const seconds = Math.floor((different / 1000) % 60);

  //5. Показати результат на екрані
  refs.timer.textContent = `${days} days ${addZero(hours)} hours ${addZero(
    minutes
  )} minutes ${addZero(seconds)} seconds`;
}

//Ф-ція яка потрібна для зупинки інтервала
function stopTimer() {
  clearInterval(timerId);
}

//Ф-ція яка потрібна для старту інтервала
function startTimer() {
  timerId = setInterval(countDownTimeToNY, 1000);
}

//Ф-ція яка додає до хвилин, годин і секунд нуль
function addZero(number) {
  return String(number).padStart(2, 0);
}

function handleButtonClick() {
  const {
    activeBtn,
    stop: { class: stopClass, text: stopText },
    start: { class: startClass, text: startText },
  } = BUTTON_UI;

  if (activeBtn === BUTTON_UI.stop.class) {
    console.log("stop");
    stopTimer();
    BUTTON_UI.activeBtn = startClass;
    refs.btn.textContent = startText;
    refs.btn.classList.add(startClass);
    refs.btn.classList.remove(stopClass);
  } else {
    console.log("start");
    startTimer();
    BUTTON_UI.activeBtn = stopClass;
    refs.btn.textContent = stopText;
    refs.btn.classList.add(stopClass);
    refs.btn.classList.remove(startClass);
  }
}
