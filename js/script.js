// Поясніть своїми словами, як ви розумієте, що таке деструктуризація і навіщо вона потрібна

// Усі завдання потрібно виконати, використовуючи синтаксис деструктуризації
// Завдання 1
const clients1 = [
  "Гилберт",
  "Сальваторе",
  "Пирс",
  "Соммерс",
  "Форбс",
  "Донован",
  "Беннет",
];
const clients2 = ["Пирс", "Зальцман", "Сальваторе", "Майклсон"];
const newArr = [...new Set([...clients1, ...clients2])];
console.log("1.newArr :>", newArr);

// Завдання 2
const characters = [
  {
    name: "Елена",
    lastName: "Гилберт",
    age: 17,
    gender: "woman",
    status: "human",
  },
  {
    name: "Кэролайн",
    lastName: "Форбс",
    age: 17,
    gender: "woman",
    status: "human",
  },
  {
    name: "Аларик",
    lastName: "Зальцман",
    age: 31,
    gender: "man",
    status: "human",
  },
  {
    name: "Дэймон",
    lastName: "Сальваторе",
    age: 156,
    gender: "man",
    status: "vampire",
  },
  {
    name: "Ребекка",
    lastName: "Майклсон",
    age: 1089,
    gender: "woman",
    status: "vempire",
  },
  {
    name: "Клаус",
    lastName: "Майклсон",
    age: 1093,
    gender: "man",
    status: "vampire",
  },
];
const charactersShortInfo = characters.map((character) => {
  return {
    name: character.name,
    lastName: character.lastName,
    age: character.age,
  };
});

console.log("2:>", charactersShortInfo);

// Завдання 3

const user1 = {
  name: "John",
  years: 30,
};
const { name, years: age, isAdmin = false } = user1;
console.log(name);
console.log(age);
console.log(isAdmin);

// Завдання 4
// Детективне агентство кілька років збирає інформацію про можливу особистість Сатоши Накамото. Вся інформація, зібрана у конкретному році, зберігається в окремому об'єкті. Усього таких об'єктів три - satoshi2018, satoshi2019, satoshi2020.

// Щоб скласти повну картину та профіль, вам необхідно об'єднати дані з цих трьох об'єктів в один об'єкт - fullProfile.

// Зверніть увагу, що деякі поля в об'єктах можуть повторюватися. У такому випадку в результуючому об'єкті має зберегтися значення, яке було отримано пізніше (наприклад, значення з 2020 пріоритетніше порівняно з 2019).

// Напишіть код, який складе повне досьє про можливу особу Сатоші Накамото. Змінювати об'єкти satoshi2018, satoshi2019, satoshi2020 не можна.

const satoshi2020 = {
  name: "Nick",
  surname: "Sabo",
  age: 51,
  country: "Japan",
  birth: "1979-08-21",
  location: {
    lat: 38.869422,
    lng: 139.876632,
  },
};

const satoshi2019 = {
  name: "Dorian",
  surname: "Nakamoto",
  age: 44,
  hidden: true,
  country: "USA",
  wallet: "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa",
  browser: "Chrome",
};

const satoshi2018 = {
  name: "Satoshi",
  surname: "Nakamoto",
  technology: "Bitcoin",
  country: "Japan",
  browser: "Tor",
  birth: "1975-04-05",
};
const fullProfile = { ...satoshi2018, ...satoshi2019, ...satoshi2020 };
console.log("4.Satoshi Nakamoto info:>", fullProfile);
// Завдання 5

const books = [
  {
    name: "Harry Potter",
    author: "J.K. Rowling",
  },
  {
    name: "Lord of the rings",
    author: "J.R.R. Tolkien",
  },
  {
    name: "The witcher",
    author: "Andrzej Sapkowski",
  },
];

const bookToAdd = {
  name: "Game of thrones",
  author: "George R. R. Martin",
};
const newBook = [...books, bookToAdd];
console.log("5.newBook array:>", newBook);
// Завдання 6

const employee = {
  name: "Vitalii",
  surname: "Klichko",
};
const newEmployee = { ...employee, age: 52, salary: 60705 };
console.log("6.Info about Klichko:>", newEmployee);
// Завдання 7
// Доповніть код так, щоб він коректно працював

// const array = ['value', () => 'showValue'];

// // Допишіть код тут

// alert(value); // має бути виведено 'value'
// alert(showValue());  // має бути виведено 'showValue'
