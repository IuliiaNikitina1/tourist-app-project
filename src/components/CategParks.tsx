// id: 501-600

const CategParks = [
  {
    id: 501,
    title: "Летний сад",
    category: "history",
    coords: {lat: 59.947112, lng: 30.333932},
    img: "../summer_garden.jpeg",
    link: "/summer_garden",
    address: "Naberezhnaya Leb'yazh'yey Kanavki, 3, St Petersburg",
    addressRus: "наб. Лебяжьей канавки, 3, 191186",
    workingTime: 
        `ПН: 10-22:00 ВТ: закрыто СР: 10-22:00 ЧТ: 10-22:00 ПТ: 10-22:00 СБ: 10-22:00 ВС: 10-22:00`,
    price: "0",
    noHolidays: "false",
    days: ['Понедельник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    rent: [""],
    activities: ['Лавочки'],
    others: ["Оплата картой", "Вход для маломобильных граждан"], //
  },
  {
    id: 502,
    title: "Марсово поле",
    category: "history",
    coords: [59.943553, 30.331705],
    img: "../marsovo_field.jpeg",
    link: "/marsovo_field",
    url: "",
    address: "Naberezhnaya Leb'yazh'yey Kanavki, 3, St Petersburg",
    addressRus: "наб. Лебяжьей канавки, 3, 191186",
    workingTime: 
        `ПН: 9-17:00 ВТ: 9-17:00 СР: 9-17:00 ЧТ: 9-17:00 ПТ: 9-17:00 СБ: закрыто ВС: закрыто`,
    price: "0",
    noHolidays: "false",
    days: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница'],
    rent: [""],
    activities: ['Лавочки'],
    others: ["Вход для маломобильных граждан"], //
  },
  {
    id: 503,
    title: "Александровский сад",
    category: "history",
    coords: {lat: 59.936309, lng: 30.306930},
    img: "../alexander_garden.png",
    link: "/alexander_garden",
    url: "",
    address: "Garden Aleksandrovskiy, St Petersburg",
    addressRus: "Александровский сад, 197101",
    workingTime: 
        `ПН: весь день ВТ: весь день СР: весь день ЧТ: весь день ПТ: весь день СБ: весь день ВС: весь день`,
    price: "0",
    noHolidays: "true",
    days: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    rent: [""],
    activities: ['Лавочки'],
    others: ["Вход для маломобильных граждан"], //
  },
  {
    id: 504,
    title: "Парк 300-летия",
    category: "activity",
    coords: {lat: 59.984085, lng: 30.202163},
    img: "../park_300_years.jpeg",
    link: "/park_three",
    url: "",
    address: "Primorskiy Prospekt, 74, St Petersburg",
    addressRus: "Приморский проспект, 74, 197374",
    workingTime: 
        `ПН: 7-23:00 ВТ: 7-23:00 СР: 7-23:00 ЧТ: 7-23:00 ПТ: 7-23:00 СБ: 7-23:00 ВС: 7-23:00`,
    price: "0",
    noHolidays: "true",
    days: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    rent: ["Велосипеды", "Самокаты", "Роликовые коньки"],
    activities: ['Детские площадки', 'Зона для пикников', 'Лавочки', 'Кофейни', 'Рестораны и кафе'],
    others: ["Вход для маломобильных граждан", "Бесплатное Wi-Fi подключение"], //
  },
  {
    id: 505,
    title: "Елагин парк",
    category: "activity",
    coords: {lat: 59.979264, lng: 30.258742},
    img: "../park_culture.jpeg",
    link: "/park_culture",
    url: "",
    address: "Елагин остров, 4, лит.Б, St Petersburg, 197110",
    addressRus: "Елагин остров, д. 4, лит. Б, 197110",
    workingTime: 
        `ПН: 6-22:00 ВТ: 6-22:00 СР: 6-22:00 ЧТ: 6-22:00 ПТ: 6-22:00 СБ: 6-22:00 ВС: 6-22:00`,
    price: "100",
    noHolidays: "true",
    days: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    rent: ["Велосипеды", "Роликовые коньки", 'Лодки', 'Лыжи', 'Сани'],
    activities: ['Детские площадки', 'Каток', 'Спортивные площадки', 'Зона для пикников', 'Лавочки', 'Кофейни', 'Рестораны и кафе'],
    others: ["Оплата картой", "Вход для маломобильных граждан", "Бесплатное Wi-Fi подключение"], //
  },
  {
    id: 506,
    title: "Михайловский сад",
    category: "history",
    coords: {lat: 59.939846, lng: 30.332822},
    img: "../mikhail_garden.jpeg",
    link: "/mikhail_garden",
    url: "",
    address: "St Petersburg, 191186",
    addressRus: "Санкт-Петербург, 191186",
    workingTime: 
        `ПН: 10-22:00 ВТ: 10-22:00 СР: 10-22:00 ЧТ: 10-22:00 ПТ: 10-22:00 СБ: 10-22:00 ВС: 10-22:00`,
    price: "0",
    noHolidays: "true",
    days: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    rent: [""],
    activities: ['Детские площадки', 'Лавочки', 'Кофейни', 'Рестораны и кафе'],
    others: ["Вход для маломобильных граждан"], //
  },
];

export default CategParks;
