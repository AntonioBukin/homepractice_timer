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