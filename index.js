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

// const user = {
//   name: "John",
//   age: 20,
//   hobby: "tennis",
//   premium: true,
// };

// user.mood = "happy";
// user.hobby = "skydiving";
// user.premium = false;

// for (const key of Object.keys(user)) {
//   console.log(`${key}: ${user[key]}`)
// }

/* Напишіть функцію, яка приймає об'єкт і рахує загальну суму зарплат працівників. */
// const someObj = {
//   worker1: 360,
//   worker2: 750,
//   worker3: 240,
// };

// function calcSalary(data) {
//  const values = Object.values(data);
//  let sum = 0;
//  for (const value of values) {
//   sum += value;

//  } return sum;
// }

// console.log(calcSalary(someObj));

/**
 * 
 
 *? Напишіть ф-цію calcTotalPrice(someStones, stoneName),
 *? яка приймає масив об'єктів та
 *? рядок під назвою каменю.
 *? Функція шукає та повертає загальну вартість каменів
 *? з таким ім'ям, ціною та кількістю з об'єкта
 */

//  const stones = [
//   { name: "Изумруд", price: 1300, quantity: 4 },
//   { name: "Бриллиант", price: 2700, quantity: 6 },
//   { name: "Сапфир", price: 400, quantity: 7 },
//   { name: "Щебень", price: 150, quantity: 100 },
// ];

// function calcTotalPrice(someStones, stoneName) {

//   for (const {name, price, quantity} of someStones) {

//     if(stoneName === name) {

//       return price * quantity
//     }
//   }

// return "Ничего не найдено"
// }

// console.log(calcTotalPrice(stones, "Сапфир"));

///**
// *? Зробіть знижку 20% на всі фрукти у масиві
// *? Надайте ід для кожного продукту
// */

// const fruits = [
//   { name: "apple", price: 200 },
//   { name: "orange", price: 300 },
//   { name: "grapes", price: 750 },
// ];

// function frutsOff(array, discount) {
//   let id = 1;
//   for (let fruit of array) {
//     fruit.price -= (fruit.price * discount) / 100;
//     fruit.id = id;
//     id += 1;
//   }
// }

// frutsOff(fruits, 20);
// console.log(fruits);

// напиши код який із массиву arr видаляє елемент foo.
// розвертає цей массив
// і повертає рядок js is the best
// вхідний массив не має змінюватись (мутується)

// const arr = ["best", "the", "foo", "is", "js"];

// const arr2 = [...arr];

// arr2.splice(arr2.indexOf("foo"), 1)

// console.log(arr2.reverse().join(" "));

///**
// *? Напишіть функцію, яка приймає массив об'єктів і повертає новий массив
// *? Зробіть знижку 20 % на всі фрукти у масиві
// *? Надайте ід для кожного продукту
// */
=======

// const arr2 = [...arr];

// arr2.splice(arr2.indexOf("foo"), 1)

// console.log(arr2.reverse().join(" "));






// blended 3 task 1
/**
 *? З об'єкту concerts потрібно отримати масив
 *? в якому будуть лише імена міст.
 *? З масиву потрібно прибрати міста, в яких концерт уже пройшов і
 *? відсортувати їх у хронологічному порядку.
 *? Результат вивести у консоль.
 *? Очікуваний результат ["Умань", "Харків", "Одеса"]
 */
//  const concerts = {
//     Київ: new Date("2020-04-01"),
//     Умань: new Date("2023-07-02"),
//     Вінниця: new Date("2024-04-21"),
//     Одеса: new Date("2020-07-15"),
//     Хмельницький: new Date("2020-04-18"),
//     Харків: new Date("2023-07-10"),
//   };

//   function filtrConcerts (obj) {
// return Object.keys(obj).filter(city => obj[city] > new Date()).sort((a,b) => obj[a] - obj[b])

//   }

//   const rezult = filtrConcerts (concerts);

// console.log(rezult);


/*
*? Напиши клас Client який створює об'єкт
*? з ​​властивостями login email
*? Оголоси приватні властивості #login #email,
*? доступ до яких зроби через геттер та сеттер login email
*/


// class Client {
//     #login;
//     #email;
//     constructor(login, email){
//         this.#login =login;
//         this.#email = email
//     }

//     get login (){
//         return this.#login
//     }

//     set login (newLogin) {
//         this.#login = newLogin;
//     }

//     get email (){
//         return this.#email
//     }

//     set email (newEmail) {
//         this.#email = newEmail;
//     }
// }

// const mango = new Client ("man","man@man.com");
// console.log(mango);

// mango.login = 'vbnm';
// mango.login
// console.log(mango.login);

// // Task module5-2

// //TODO:==============================================
// /**
// *? Поверніть об'єкт, в якому вказано кількість тегів.
// *? Очікуваний результат {js: 3, nodejs: 3, html: 2, css: 2, react: 2}

//  */
// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// function amountTags(arr) {
//     return arr.flatMap((arrItem) => arrItem.tags)
//         .reduce((acc, item) => {
//             return {
//                 ...acc,
//                 [item]: acc[item] ? acc[item] + 1 : 1
//             }
//     }, {})
// }
// console.log(amountTags(tweets));


// task5-5
//TODO:=============================================
/**
 *? Напиши клас Notes який управляє колекцією нотаток у
 *? властивості items.
 *? Нотатка - це об'єкт із властивостями text і priority.
 *? Додай класу статичний метод Priopity,
 *? який буде повертати об'єкт із пріоритетами.
 *? Додай методи addNote(note), removeNote(text)
 *? updatePriority(text, newPriority)
 */
// static Priority() {
//     return {
//       HIGHT: "hight",
//       LOW: "low",
//     };

// class Notes {
//     #findNoteIndex(text) {
//         return this.items.findIndex((item) => item.text === text);
//     }
//     static Priority() {
//         return {
//             HIGHT: "hight",
//             LOW: "low",
//         };
//     }
//     constructor() {
//         this.items = [];
//     }
//     addNote(note) {
//         this.items.push(note);
//     }
//     removeNote(text) {
//         const index = this.#findNoteIndex(text);
//         if (index !== -1) {
//             this.items.splice(index, 1);
//         }
//     }
//     updatePriority(text, newPriority) {
//         const index = this.#findNoteIndex(text);
//         if (index !== -1) {
//             this.items[index].priority = newPriority;
//         }
//     }
// }
// const NewNotes = new Notes();
// NewNotes.addNote({ text: "abc", priority: Notes.Priority().HIGHT });
// NewNotes.addNote({ text: "cde", priority: Notes.Priority().HIGHT });
// NewNotes.addNote({ text: "efg", priority: Notes.Priority().HIGHT });
// NewNotes.addNote({ text: "ghi", priority: Notes.Priority().HIGHT });
// NewNotes.removeNote("yyy");
// console.log(NewNotes);
// NewNotes.updatePriority("cde", "mmm");

// const fruits = [
//   { name: "apple", price: 200 },
//   { name: "orange", price: 300 },
//   { name: "grapes", price: 750 },
// ];

// const fruitsArr = fruits.map((el, idx) => {
//   return {
//     ...el,
//     price: el.price * 0.8,
//     id: idx + 1,
//   };
// });
// console.log(fruitsArr);
