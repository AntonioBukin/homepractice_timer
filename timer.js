// Написати таймер зворотнього відліку до Нового року який можна зупиняти при кліку на кнопку **Stop**

// /*
//     1. створимо дату наступного Нового року, до якого будемо рахувати час
//     2. отримати поточну дату
//     3. від дати Нового року відняти поточну дату, таким чином ми отримаємо кількість мілісекунд, яка лишилась до Нового року
//     4. З нашої різниці витягнути дні, години, хвилини і секунди
//     5. Показати результат на екрані
//     6. Запустити сет інтервал, який буде оновлювати час кожну секунду
// */

const refs = {
  timer: document.getElementById("timer"),
  stopBtn: document.getElementById("stopBtn"),
  startBtn: document.getElementById("startBtn"),
}; //отримуємо посилання на елементи з якими ми будемо працювати

//1. створимо дату наступного Нового року, до якого будемо рахувати час
const countDownDate = new Date(`Jan 1, ${new Date().getFullYear() + 1}`);
//console.log(countDownDate); //Mon Jan 01 2024 00:00:00 GMT+0200 (Eastern European Standard Time)

//6. Запустити сет інтервал, який буде оновлювати час кожну секунду
setInterval(countDownTimeToNY, 1000);
countDownTimeToNY();

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
  refs.timer.textContent = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;
}

countDownTimeToNY();
