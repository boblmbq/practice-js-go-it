/**
 *? Напишіть цикл, який виводить у консоль
 *? числа  від max до min  за спаданням
 *? Виведіть у консоль усі парних чисел від min до max
 */

// const max = 50;
// const min = 23;

// for (let i = max; i >= min; i -= 1) {
//   console.log(i);
// }

// for (let i = min; i <= max; i += 1) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

/**
 *? Використовуючи функцію if...else,
 *? напишіть код, який запитуватиме:
 *? "Яка офіційна назва JavaScript?"
 *? Якщо користувач вводить "ECMAScript",
 *? то показати через alert: "Вірно!"
 *? інакше відобразити:"Не знаєте? ECMAScript!"
 */

// const message = prompt("Яка офіційна назва JavaScript?").trim();

// if(message === "ECMAScript") {
//   alert ("Вірно!");
// } else {
//   alert ("Не знаєте? ECMAScript!")
// }

/**

Напишіть програму, яка отримає від користувача
 число (кількість хвилин) та виведе в консоль
 рядок у форматі годин та хвилин
 70 === 01:10
 */

// const number = prompt("ведіть число");
// const hours = String(Math.floor(number/60)).padStart(2, "0");
// const minutes = String(number%60).padStart(2, "0");
// console.log(`${hours}:${minutes}`);

/**
 *? Напиши скрипт для об'єкта user,
 *? послідовно:
 *? 1 додати поле mood зі значенням 'happy'
 *? 2 замінить hobby на 'skydiving'
 *? 3 замінить значення premium на false
 *? 4 виводить вміст об'єкта users у форматі
 *? ключ: значення використовуючи Object.keys() і for...of
 */

const user = {
  name: "John",
  age: 20,
  hobby: "tennis",
  premium: true,
};

user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;



for (const key of Object.keys(user)) {
  console.log(`${key}: ${user[key]}`)
}
