// id: 1-100

const CategCathedrals = [
  {
    id: 1,
    title: "Исаакиевский собор",
    category: "Православные соборы",
    coords: [59.934137, 30.306233],
    img: "../isaac.jpeg",
    link: "/isaac",
    url: "https://cathedral.ru/ru",
    price: "450",  
    address: "4 St Isaac's Square, St Petersburg",
    addressRus: "Исаакиевская пл., д. 4, 190000",
    workingTime: 
        `ПН: 10:30-18:00 ВТ: 10:30-18:00 СР: закрыто ЧТ: 10:30-18:00 ПТ: 10:30-18:00 СБ: 10:30-18:00 ВС: 10:30-18:00`,
    noHolidays: "false",
    days: ['Понедельник', 'Вторник', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    privileges: ["Студенты", "Пенсионеры", "Дошкольники", "Ветераны"], //
    others: ["Вход для маломобильных граждан", "Аудиогид"], //
  },
  {
    id: 2,
    title: "Казанский собор",
    category: "Православные соборы",
    coords: [59.934345, 30.324611],
    img: "../kazan.jpeg",
    link: "/kazan",
    url: "http://kazansky-spb.ru/",
    price: "650",  
    address: "2 Kazan Square, St Petersburg",
    addressRus: "Казанская пл., д. 2, 191186",
    workingTime: 
        `ПН: 8:30-19:45 ВТ: 8:30-19:45 СР: 7-19:45 ЧТ: 7-19:45 ПТ: 7:30-19:45 СБ: 6:30-19:45 ВС: 6:30-19:45`,
    noHolidays: "true",
    days: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    privileges: ["Студенты", "Пенсионеры", "Дошкольники", "Ветераны"], //
    others: ["Вход для маломобильных граждан", "Аудиогид"], //
  },
  {
    id: 3,
    title: "Спас-на-Крови",
    category: "Православные соборы",
    coords: [59.940070, 30.328633],
    img: "../blood_savior.png",
    link: "/blood_savior",
    url: "http://spas.spb.ru/",
    price: "450",  
    address: "Griboyedov channel embankment, 2Б, St Petersburg",
    addressRus: "наб. канала Грибоедова, 2Б, 191186",
    workingTime: 
        `ПН: 10-18:00 ВТ: 10-18:00 СР: закрыто ЧТ: 10-18:00 ПТ: 10-18:00 СБ: 10-18:00 ВС: 10-18:00`,
    noHolidays: "false",
    days: ['Понедельник', 'Вторник', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    privileges: ["Студенты", "Пенсионеры", "Дошкольники", "Ветераны"], //
    others: ["Вход для маломобильных граждан", "Аудиогид"], //
  },
  {
    id: 4,
    title: "Смольный собор",
    category: "Православные соборы",
    coords: [59.948850, 30.395467],
    img: "../smolniy.jpeg",
    link: "/smolniy",
    url: "http://smolnysobor.tilda.ws/",
    price: "300",  
    address: "Ploshchad' Rastrelli, 1, St Petersburg",
    addressRus: "пл. Растрелли, 1, 191124",
    workingTime: 
        `ПН: 8-20:00 ВТ: 8-20:00 СР: 8-20:00 ЧТ: 8-20:00 ПТ: 8-20:00 СБ: 8-20:00 ВС: 8-20:00`,
    noHolidays: "true",
    days: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    privileges: ["Студенты", "Пенсионеры", "Дошкольники", "Ветераны"], //
    others: ["Вход для маломобильных граждан", "Аудиогид"], //
  },
  {
    id: 5,
    title: "Петропавловский собор",
    category: "Православные соборы",
    coords: [59.950117, 30.316012],
    img: "../petropavlovskiy.jpeg",
    link: "/petropavlovskiy",
    url: "https://www.spbmuseum.ru/themuseum/museum_complex/peterpaul_fortress/",
    price: "550", 
    address: "Peter and Paul Fortress, St Petersburg, 197046",
    addressRus: "Петропавловская крепость, 197046",
    workingTime: 
        `ПН: 10-18:00 ВТ: 10-17:00 СР: закрыто ЧТ: 10-18:00 ПТ: 10-18:00 СБ: 10-17:45 ВС: 11-18:00`,
    noHolidays: "false",
    days: ['Понедельник', 'Вторник', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    privileges: ["Студенты", "Пенсионеры", "Дошкольники", "Ветераны"], //
    others: ["Вход для маломобильных граждан", "Аудиогид"], //
  },
  {
    id: 6,
    title: "Соборная мечеть",
    category: "Мусульманские мечети",
    coords: [59.955241, 30.323908],
    img: "../sobornaya_mechet.jpeg",
    link: "/mechet",
    url: "https://dum-spb.ru/",
    price: "0",  
    address: "Kronverkskiy Prospekt, 7, St Petersburg",
    addressRus: "Кронверкский проспект, д. 7, 197046",
    workingTime: 
        `ПН: 10-17:00 ВТ: 10-17:00 СР: 10-17:00 ЧТ: 10-17:00 ПТ: 10-17:00 СБ: 10-17:00 ВС: 10-17:00`,
    noHolidays: "true",
    days: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    privileges: ["Студенты", "Пенсионеры", "Дошкольники", "Ветераны"], //
    others: ["Вход для маломобильных граждан", "Аудиогид"], //
  },
  {
    id: 7,
    title: "Хоральная Синагога",
    category: "Синагоги",
    coords: [59.924707, 30.291778],
    img: "../big-sinagoga.jpeg",
    link: "/big-sinagoga",
    url: "https://sinagoga.jeps.ru/",
    price: "500",  
    address: "Lermontovskiy Avenue, 2, 190121",
    addressRus: "Лермонтовский пр., д. 2, 190121",
    workingTime: 
        `ПН: 10-19:00 ВТ: 10-19:00 СР: 10-19:00 ЧТ: 10-19:00 ПТ: 10-15:00 СБ: закрыто ВС: 11-18:00`,
    noHolidays: "false", 
    days: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Воскресенье'],
    privileges: ["Студенты", "Пенсионеры", "Дошкольники", "Ветераны"], //
    others: ["Вход для маломобильных граждан", "Аудиогид"], //
  },
  {
    id: 8,
    title: "Базилика Св. Екатерины",
    category: "Католические храмы",
    coords: [59.924707, 30.291778],
    img: "../basilics.png",
    link: "/basilics",
    url: "https://catherine.spb.ru/",
    price: "0",  
    address: "Nevskiy Avenue, 32-34, 191186",
    addressRus: "Невский пр., д. 32-34, 191186",
    workingTime: 
        `ПН: 8-20:00 ВТ: 8-20:00 СР: 8-20:00 ЧТ: 8-20:00 ПТ: 8-20:00 СБ: 8-20:00 ВС: 8-20:00`,
    noHolidays: "true", 
    days: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    privileges: ["Студенты", "Пенсионеры", "Дошкольники", "Ветераны"], //
    others: ["Вход для маломобильных граждан", "Бесплатное Wi-Fi подключение", "Аудиогид"], //
  },
  {
    id: 9,
    title: "Церковь Св. Станислава",
    category: "Католические храмы",
    coords: [59.922678, 30.288246],
    img: "../st-stanislaus.png",
    link: "/st-stanislaus",
    url: "https://stanislausspb.wordpress.com/",
    price: "0",  
    address: "Soyuza Pechatnikov Street, 22, 190121",
    addressRus: "ул. Союза Печатников, д. 22, 190121",
    workingTime: 
        `ПН: закрыто ВТ: закрыто СР: 17:30-21:00 ЧТ: 17:30-21:00 ПТ: 17:30-21:00 СБ: 17:30-21:00 ВС: 11-21:00`,
    noHolidays: "false", 
    days: ['Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    privileges: ["Студенты", "Пенсионеры", "Дошкольники", "Ветераны"], //
    others: ["Вход для маломобильных граждан", "Бесплатное Wi-Fi подключение", "Аудиогид"], //
  },
  {
    id: 10,
    title: "Дацан Гунзэчойнэй",
    category: "Буддистские храмы",
    coords: [59.983492, 30.256025],
    img: "../dazan.png",
    link: "/dazan",
    url: "https://dazanspb.ru/",
    price: "300",  
    address: "Primorskiy Avenue, 91",
    addressRus: "Приморский пр., д. 91",
    workingTime: 
        `ПН: 10-19:00 ВТ: 10-19:00 СР: закрыто ЧТ: 10-19:00 ПТ: 10-19:00 СБ: 10-19:00 ВС: 10-19:00`,
    noHolidays: "false", 
    days: ['Понедельник', 'Вторник', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    privileges: ["Студенты", "Пенсионеры", "Дошкольники", "Ветераны"], //
    others: ["Вход для маломобильных граждан", "Бесплатное Wi-Fi подключение", "Аудиогид"], //
  },
  {
    id: 11,
    title: "Спасо-Преображенский",
    category: "Православные соборы",
    coords: [59.943022, 30.352515],
    img: "../spaso-preobr.jpeg",
    link: "/spaso-preobr",
    url: "https://www.spaso-preobr-sobor.ru/",
    price: "0",  
    address: "Preobrazhenskaya Square, 1, 191028",
    addressRus: "Преображенская пл., д. 1, 191028",
    workingTime: 
        `ПН: 8-20:00 ВТ: 8-20:00 СР: 8-20:00 ЧТ: 8-20:00 ПТ: 8-20:00 СБ: 8-20:00 ВС: 8-20:00`,
    noHolidays: "true", 
    days: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    privileges: ["Студенты", "Пенсионеры", "Дошкольники", "Ветераны"], //
    others: ["Вход для маломобильных граждан", "Бесплатное Wi-Fi подключение"], //
  },
//   {
//     id: 12,
//     title: "",
//     category: "",
//     coords: [],
//     img: "../.jpeg",
//     link: "/",
//     url: "",
//     price: "2000",  
//     address: "",
//     addressRus: "",
//     workingTime: //
//         `ПН: 10-17:00 ВТ: 10-17:00 СР: 10-17:00 ЧТ: 10-17:00 ПТ: 10-17:00 СБ: 10-17:00 ВС: 10-17:00`,
//     noHolidays: "false", //
//     privileges: ["Студенты", "Пенсионеры", "Дошкольники", "Ветераны"], //
//     others: ["Бесплатная парковка", "Оплата картой", "Билеты онлайн", "Вход для маломобильных граждан", "Метро рядом", "Аудиогид"], //
//   },
];

export default CategCathedrals;
