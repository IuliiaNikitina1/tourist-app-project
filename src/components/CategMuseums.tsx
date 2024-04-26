// id: 801-1000

const CategMuseums = [
  {
    id: 801,
    title: "Эрмитаж",
    category: "Искусство",
    coords: {lat: 59.939864, lng: 30.314566},
    img: "../hermitage.jpeg",
    link: "/hermitage",
    url: "https://www.hermitagemuseum.org/wps/portal/hermitage/",
    price: "500", 
    address: "2 Palace Square, St Petersburg",
    addressRus: "Дворцовая пл., д. 2, 190000",
    workingTime: 
        `ПН: закрыто ВТ: 11-20:00 СР: 11-18:00 ЧТ: 11-18:00 ПТ: 11-20:00 СБ: 11-20:00 ВС: 11-18:00`,
    noHolidays: "false",
    days: ['Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'], 
    privileges: ["Студенты", "Пенсионеры", "Дошкольники", "Ветераны"], //
    others: ["Вход для маломобильных граждан", "Бесплатное Wi-Fi подключение"], //
  },
  {
    id: 802,
    title: "Эрарта",
    category: "Искусство",
    coords: {lat: 59.932206, lng: 30.251440},
    img: "../erarta.jpeg",
    link: "/erarta",
    url: "https://www.erarta.com/",
    price: "1000", 
    address: "29 Liniya Vasil'yevskogo Ostrova, 2, St Petersburg",
    addressRus: "29 лин. Васильевского острова, д. 2, 199106",
    workingTime: 
        `ПН: 11-23:00 ВТ: закрыто СР: 11-23:00 ЧТ: 11-23:00 ПТ: 11-23:00 СБ: 11-23:00 ВС: 11-23:00`,
    noHolidays: "false",
    days: ['Понедельник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    privileges: ["Студенты", "Пенсионеры", "Дошкольники", "Ветераны"], //
    others: ["Вход для маломобильных граждан", "Бесплатное Wi-Fi подключение"], //
  },
  {
    id: 803,
    title: "Кунсткамера",
    category: "Естественные науки",
    coords: {lat: 59.941545, lng: 30.304488},
    img: "../kunstkamera.jpeg",
    link: "/kunstkamera",
    url: "https://www.kunstkamera.ru/",
    price: "400", 
    address: "University Embankment, 3, St Petersburg",
    addressRus: "Университетская наб., д. 3, 199034",
    workingTime: 
        `ПН: закрыто ВТ: 10-18:00 СР: 10-18:00 ЧТ: 10-18:00 ПТ: 10-18:00 СБ: 10-18:00 ВС: 10-18:00`,
    noHolidays: "false",
    days: ['Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    privileges: ["Студенты", "Пенсионеры", "Дошкольники", "Ветераны"], //
    others: ["Вход для маломобильных граждан", "Бесплатное Wi-Fi подключение"], //
  },
  {
    id: 804,
    title: "Гранд Макет",
    category: "Для детей",
    coords: {lat: 59.888076, lng: 30.330452},
    img: "../grand_maket.jpeg",
    link: "/grand_maket",
    url: "https://grandmaket.ru/",
    price: "860", 
    address: "Tsvetochnaya Ulitsa, 16, St Petersburg",
    addressRus: "Цветочная ул., д. 16, 196084",
    workingTime: 
        `ПН: 10-20:00 ВТ: 10-20:00 СР: 10-20:00 ЧТ: 10-20:00 ПТ: 10-20:00 СБ: 10-20:00 ВС: 10-20:00`,
    noHolidays: "true",
    days: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    privileges: ["Студенты", "Пенсионеры", "Дошкольники", "Ветераны"], //
    others: ["Вход для маломобильных граждан", "Бесплатное Wi-Fi подключение"], //
  },
  {
    id: 805,
    title: "Крейсер Аврора",
    category: "Военные музеи",
    coords: {lat: 59.955490, lng: 30.337842},
    img: "../creiser.jpeg",
    link: "/creiser",
    url: "https://kreyser-avrora.ru",
    price: "550",  
    address: "Petrogradskaya Embankment, St Petersburg, 197046",
    addressRus: "Петроградская наб., 197046",
    workingTime: 
        `ПН: закрыто ВТ: закрыто СР: 11-18:00 ЧТ: 11-18:00 ПТ: 11-18:00 СБ: 11-18:00 ВС: 11-18:00`,
    noHolidays: "false",
    days: ['Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    privileges: ["Студенты", "Пенсионеры", "Дошкольники", "Ветераны"], //
    others: ["Вход для маломобильных граждан", "Бесплатное Wi-Fi подключение"], //
  },
  {
    id: 806,
    title: "Русский музей",
    category: "Искусство",
    coords: {lat: 59.938782, lng: 30.332383},
    img: "../russian_museum.jpeg",
    link: "/russian_museum",
    url: "https://ticket.rusmuseum.ru/?id=12&sid=523",
    price: "600",  
    address: "Inzhenernaya St, 4, St Petersburg",
    addressRus: "Инженерная ул., д. 4, 191186",
    workingTime: 
        `ПН: 10-18:00 ВТ: закрыто СР: 10-18:00 ЧТ: 13-21:00 ПТ: 10-18:00 СБ: 10-18:00 ВС: 10-18:00`,
    noHolidays: "false",
    days: ['Понедельник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    privileges: ["Студенты", "Пенсионеры", "Дошкольники", "Ветераны"], //
    others: ["Вход для маломобильных граждан", "Бесплатное Wi-Fi подключение"], //
  },
  {
    id: 807,
    title: "Арка Главного штаба",
    category: "Искусство",
    coords: {lat: 59.938790, lng: 30.317904},
    img: "../glav-shtab.jpeg",
    link: "/glav-shtab",
    url: "https://hermitagemuseum.org/wps/portal/hermitage/",
    price: "1000",  
    address: "Palace Square, St Petersburg, 191186",
    addressRus: "Дворцовая пл., 191186",
    workingTime: //
        `ПН: 10-18:00 ВТ: закрыто СР: 10-18:00 ЧТ: 13-21:00 ПТ: 10-18:00 СБ: 10-18:00 ВС: 10-18:00`,
    noHolidays: "false",
    days: ['Понедельник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    privileges: ["Студенты", "Пенсионеры", "Дошкольники", "Ветераны"], //
    others: ["Вход для маломобильных граждан", "Бесплатное Wi-Fi подключение"], //
  },
  {
    id: 808,
    title: "Петропавловская крепость",
    category: "Военные музеи",
    coords: {lat: 59.950258, lng: 30.315635},
    img: "../petropav-krepost.jpeg",
    link: "/petropav-krepost",
    url: "",
    price: "0", 
    address: "St Petersburg, 197046",
    addressRus: "197046",
    workingTime: 
        `ПН: 10-16:00 ВТ: 10-16:00 СР: закрыто ЧТ: 10-16:00 ПТ: 10-16:00 СБ: 10-16:00 ВС: 10-16:00`,
    noHolidays: "false",
    days: ['Понедельник', 'Вторник', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    privileges: ["Студенты", "Пенсионеры", "Дошкольники", "Ветераны"], //
    others: ["Вход для маломобильных граждан", "Бесплатное Wi-Fi подключение"], //
  },
  {
    id: 809,
    title: "Музей артиллерии",
    category: "Военные музеи",
    coords: {lat: 59.954054, lng: 30.313727},
    img: "../museum-artillerii.jpeg",
    link: "/museum-artillerii",
    url: "https://www.artillery-museum.ru/",
    price: "500", 
    address: "Park Aleksandrovskiy, 7, St Petersburg, 197101",
    addressRus: "парк Александровский, 7, 197101",
    workingTime: 
        `ПН: закрыто ВТ: закрыто СР: 11-18:00 ЧТ: 11-18:00 ПТ: 11-18:00 СБ: 11-18:00 ВС: 11-18:00`,
    noHolidays: "false",
    days: ['Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    privileges: ["Студенты", "Пенсионеры", "Дошкольники", "Ветераны"], //
    others: ["Вход для маломобильных граждан", "Бесплатное Wi-Fi подключение"], //
  },
  {
    id: 810,
    title: "Музей Титикака",
    category: "Музеи рекордов",
    coords: {lat: 59.932366, lng: 30.321472},
    img: "../titikaka-museum.jpeg",
    link: "/titikaka-museum",
    url: "https://titiqaqa.ru/",
    price: "700",  
    address: "Kazanskaya St, 7, St Petersburg, 191186",
    addressRus: "Казанская ул., д.7, 191186",
    workingTime: 
        `ПН: 10-21:00 ВТ: 10-21:00 СР: 10-21:00 ЧТ: 10-21:00 ПТ: 10-21:00 СБ: 10-21:00 ВС: 10-21:00`,
    noHolidays: "true",
    days: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    privileges: ["Пенсионеры", "Дошкольники"], //
    others: ["Вход для маломобильных граждан", "Бесплатное Wi-Fi подключение"], //
  },
  {
    id: 811,
    title: "Музей Арктики",
    category: "Естественные науки",
    coords: {lat: 59.927425, lng: 30.353507},
    img: "../museum-arctic.jpeg",
    link: "/museum-arctic",
    url: "https://polarmuseum.ru/",
    price: "350",  
    address: "Ul Marata, 24A, St Petersburg, 191040",
    addressRus: "ул. Марата, 24А, 191040",
    workingTime: 
        `ПН: закрыто ВТ: закрыто СР: 10-18:00 ЧТ: 10-18:00 ПТ: 10-18:00 СБ: 10-18:00 ВС: 10-18:00`,
    noHolidays: "false",
    days: ['Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    privileges: ["Студенты", "Пенсионеры", "Дошкольники", "Ветераны"], //
    others: ["Вход для маломобильных граждан", "Бесплатное Wi-Fi подключение"], //
  },
  {
    id: 812,
    title: "Вселенная воды",
    category: "Естественные науки",
    coords: {lat: 59.949532, lng: 30.376098},
    img: "../water-universe.jpeg",
    link: "/water-universe",
    url: "https://www.vodokanal-museum.ru/booking2/",
    price: "540",  
    address: "Shpalernaya Ulitsa, 56, St Petersbug, 191015",
    addressRus: "Шпалерная ул., д.56, 191015",
    workingTime: 
        `ПН: закрыто ВТ: закрыто СР: 10-18:00 ЧТ: 10-18:00 ПТ: 10-18:00 СБ: 10-18:00 ВС: 10-18:00`,
    noHolidays: "false",
    days: ['Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    privileges: ["Студенты", "Пенсионеры", "Дошкольники", "Ветераны"], //
    others: ["Вход для маломобильных граждан", "Бесплатное Wi-Fi подключение"], //
  },
  {
    id: 813,
    title: "Юсуповский дворец",
    category: "Дворцы",
    coords: {lat: 59.929384, lng: 30.298870},
    img: "../yusupov-palace.jpeg",
    link: "/yusupov-palace",
    url: "https://yusupov-palace.ru/ru",
    price: "500",  
    address: "Ulitsa Dekabristov, 21, St Petersburg, 190000",
    addressRus: "ул. Декабристов, д. 21, 190000",
    workingTime: 
        `ПН: 10-19:30 ВТ: 10-19:30 СР: 10-19:30 ЧТ: 10-19:30 ПТ: 10-19:30 СБ: 10-19:30 ВС: 10-19:30`,
    noHolidays: "true",
    days: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    privileges: ["Студенты", "Пенсионеры", "Дошкольники", "Ветераны"], //
    others: ["Вход для маломобильных граждан", "Бесплатное Wi-Fi подключение"], //
  },
  {
    id: 814,
    title: "Этнографический музей",
    category: "Этнография",
    coords: {lat: 59.937882, lng: 30.334382},
    img: "../etnography.jpeg",
    link: "/etnography-museum",
    url: "https://ethnomuseum.ru/",
    price: "400",  
    address: "Inzhenernaya St, 4/1, St Petersburg, 191011",
    addressRus: "Инженерная ул., 4/1, 191011",
    workingTime: 
        `ПН: закрыто ВТ: 10-21:00 СР: 10-18:00 ЧТ: 10-18:00 ПТ: 10-18:00 СБ: 10-18:00 ВС: 10-18:00`,
    noHolidays: "false",
    days: ['Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    privileges: ["Студенты", "Пенсионеры", "Дошкольники", "Ветераны"], //
    others: ["Вход для маломобильных граждан", "Бесплатное Wi-Fi подключение"], //
  },
  {
    id: 815,
    title: "Мраморный дворец",
    category: "Дворцы",
    coords: {lat: 59.945188, lng: 30.326946},
    img: "../marble-palace.jpeg",
    link: "/marble-palace",
    url: "https://rusmuseum.ru/marble-palace/exhibitions/",
    price: "500",  
    address: "Millionnaya St, 5/1, St Petersburg, 191186",
    addressRus: "Миллионная ул., 5/1, 191186",
    workingTime: 
        `ПН: 10-18:00 ВТ: закрыто СР: 10-18:00 ЧТ: 13-21:00 ПТ: 10-18:00 СБ: 10-18:00 ВС: 10-18:00`,
    noHolidays: "false",
    days: ['Понедельник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    privileges: ["Студенты", "Пенсионеры", "Дошкольники", "Ветераны"], //
    others: ["Вход для маломобильных граждан", "Бесплатное Wi-Fi подключение"], //
  },
  {
    id: 816,
    title: "Дворец Меншикова",
    category: "Дворцы",
    coords: {lat: 59.938767, lng: 30.295782},
    img: "../menshikov-palace.jpeg",
    link: "/menshikov-palace",
    url: "https://hermitagemuseum.org/wps/portal/hermitage/visitus/menshikov-palace/?lng=ru",
    price: "600",  
    address: "University Embankment, 15, St Petersburg, 190000",
    addressRus: "Университетская наб., 15, 190000",
    workingTime: 
        `ПН: закрыто ВТ: 10:30-17:00 СР: 10:30-20:00 ЧТ: 10:30-17:00 ПТ: 10:30-20:00 СБ: 10:30-17:00 ВС: 10:30-17:00`,
    noHolidays: "false",
    days: ['Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    privileges: ["Студенты", "Пенсионеры", "Дошкольники", "Ветераны"], //
    others: ["Вход для маломобильных граждан", "Бесплатное Wi-Fi подключение"], //
  },
  {
    id: 817,
    title: "Музей теней",
    category: "Естественные науки",
    coords: {lat: 59.940510, lng: 30.323540},
    img: "../shadows-museum.webp",
    link: "/shadows-museum",
    url: "https://shadowmuseum.ru/",
    price: "450",  
    address: "Bolshaya Konyushennaya St, 5A, St Petersburg, 191186",
    addressRus: "Большая Конюшенная ул., 5А, 191186",
    workingTime: 
        `ПН: 11-22:00 ВТ: 11-22:00 СР: 11-22:00 ЧТ: 11-22:00 ПТ: 11-22:00 СБ: 11-22:00 ВС: 11-22:00`,
    noHolidays: "true",
    days: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    privileges: ["Студенты", "Пенсионеры", "Дошкольники", "Ветераны"], //
    others: ["Вход для маломобильных граждан", "Бесплатное Wi-Fi подключение"], //
  },
  {
    id: 818,
    title: "Михайловский замок",
    category: "Замки",
    coords: {lat: 59.940735, lng: 30.337600},
    img: "../mikhail-castle.jpeg",
    link: "/mikhail-castle",
    url: "https://rusmuseum.ru/",
    price: "550",  
    address: "Sadovaya St, 2, St Petersburg, 191023",
    addressRus: "Садовая ул., 2, 191023",
    workingTime: 
        `ПН: 10-18:00 ВТ: закрыто СР: 10-18:00 ЧТ: 13-21:00 ПТ: 10-18:00 СБ: 10-18:00 ВС: 10-18:00`,
    noHolidays: "false",
    days: ['Понедельник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    privileges: ["Студенты", "Пенсионеры", "Дошкольники", "Ветераны"], //
    others: ["Вход для маломобильных граждан", "Бесплатное Wi-Fi подключение"], //
  },
  {
    id: 819,
    title: "Музей Ф.М. Достоевского",
    category: "Мемориальные квартиры",
    coords: {lat: 59.927376, lng: 30.350695},
    img: "../museum-dostoevsky.jpeg",
    link: "/museum-dostoevsky",
    url: "https://md.spb.ru/",
    price: "300",  
    address: "Kuznechnyy Pereulok, 5/2, St Petersburg, 191002",
    addressRus: "Кузнечный пер., 5/2, 191002",
    workingTime: 
        `ПН: закрыто ВТ: 11-18:00 СР: 13-20:00 ЧТ: 11-18:00 ПТ: 11-18:00 СБ: 11-18:00 ВС: 11-18:00`,
    noHolidays: "false",
    days: ['Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    privileges: ["Студенты", "Пенсионеры", "Дошкольники", "Ветераны"], //
    others: ["Вход для маломобильных граждан", "Бесплатное Wi-Fi подключение"], //
  },
  {
    id: 820,
    title: "Квартира А.С. Пушкина",
    category: "Мемориальные квартиры",
    coords: {lat: 59.941145, lng: 30.321111},
    img: "../museum-pushkin.jpeg",
    link: "/museum-pushkin",
    url: "http://www.museumpushkin.ru/",
    price: "800",  
    address: "embankment Riv Moyka, 12, St Petersburg, 191186",
    addressRus: "наб. реки Мойки, д.12, 191186",
    workingTime: 
        `ПН: закрыто ВТ: 10:30-18:00 СР: 10:30-18:00 ЧТ: 10:30-18:00 ПТ: 10:30-18:00 СБ: 10:30-18:00 ВС: 10:30-18:00`,
    noHolidays: "false",
    days: ['Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    others: ["Вход для маломобильных граждан", "Бесплатное Wi-Fi подключение"], //
    privileges: ["Студенты", "Пенсионеры", "Дошкольники", "Ветераны"], //
  },
  {
    id: 821,
    title: "Строгановский дворец",
    category: "Дворцы",
    coords: {lat: 59.932993, lng: 30.339825},
    img: "../stroganov.png",
    link: "/stroganov",
    url: "http://www.rusmuseum.ru/",
    price: "500",  
    address: "River Moyki Embankment, 46",
    addressRus: "наб. реки Мойки, 46",
    workingTime: 
        `ПН: 10-18:00 ВТ: закрыто СР: 10-18:00 ЧТ: 13-21:00 ПТ: 10-18:00 СБ: 10-18:00 ВС: 10-18:00`,
    noHolidays: "false",
    days: ['Понедельник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    others: ["Вход для маломобильных граждан"], //
    privileges: ["Студенты", "Пенсионеры", "Дошкольники", "Ветераны"], //
  },
  {
    id: 822,
    title: "Елагин дворец",
    category: "Дворцы",
    coords: {lat: 59.979272, lng: 30.270041}, 
    img: "../elagin-palace.jpeg",
    link: "/elagin-palace",
    url: "",
    price: "150",  
    address: "Elagin Island, 4",
    addressRus: "Елагин остров, 4",
    workingTime: 
        `ПН: закрыто ВТ: 10-18:30 СР: 12-20:00 ЧТ: 10-18:30 ПТ: 10-18:30 СБ: 10-18:30 ВС: 10-18:30`,
    noHolidays: "false",
    days: ['Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    others: ["Вход для маломобильных граждан", "Бесплатное Wi-Fi подключение"], //
    privileges: ["Студенты", "Пенсионеры", "Дошкольники", "Ветераны"], //
  },
  {
    id: 823,
    title: "Воронцовский дворец",
    category: "Дворцы",
    coords: {lat: 59.931408, lng: 30.331599}, 
    img: "../vorontsov-palace.jpg",
    link: "/vorontsov-palace",
    url: "",
    price: "500",  
    address: "St. Sadovaya, 26Д, 191023",
    addressRus: "Садовая ул., 26Д, 191023",
    workingTime: 
        `ПН: 9-18:00 ВТ: 9-18:00 СР: 9-18:00 ЧТ: 9-18:00 ПТ: 9-18:00 СБ: 9-18:00 ВС: 9-18:00`,
    noHolidays: "true",
    days: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    others: ["Вход для маломобильных граждан"], //
    privileges: ["Студенты", "Пенсионеры", "Дошкольники", "Ветераны"], //
  },
  {
    id: 824,
    title: "Музей Штиглица",
    category: "Искусство",
    coords: {lat: 59.943014, lng: 30.340585}, 
    img: "../museum-shtiglitz.jpeg",
    link: "/museum-shtiglitz",
    url: "https://www.ghpa.ru/museum-expo/poseshchenie-muzeya",
    price: "900",  
    address: "Solyanoy Lane, 13, 191028",
    addressRus: "Соляной пер., д. 13, 191028",
    workingTime: 
        `ПН: 11-17:00 ВТ: 11-17:00 СР: 11-17:00 ЧТ: 11-17:00 ПТ: 11-17:00 СБ: закрыто ВС: закрыто`, // (?)
    noHolidays: "false",
    days: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница'],
    privileges: ["Дошкольники"], 
    others: ["Вход для маломобильных граждан"], 
  },
  {
    id: 825,
    title: "Музей нонконформизма",
    category: "Искусство",
    coords: {lat: 59.929432, lng: 30.358689}, 
    img: "../non-museum.png",
    link: "/non-museum",
    url: "https://www.nonmuseum.ru/",
    price: "",  
    address: "St. Pushkinskaya, 10, 191040",
    addressRus: "Пушкинская ул., д. 10, 191040",
    workingTime: 
        `ПН: закрыто ВТ: закрыто СР: 16-20:00 ЧТ: 16-20:00 ПТ: 16-20:00 СБ: 12-20:00 ВС: 12-20:00`,
    noHolidays: "false",
    days: ['Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    privileges: [""], 
    others: ["Вход для маломобильных граждан", "Бесплатное Wi-Fi подключение"], //
  },
  {
    id: 826,
    title: "Музей Керамарх",
    category: "Искусство",
    coords: {lat: 59.949969, lng: 30.320027}, 
    img: "../keramarh.jpeg",
    link: "/keramarh",
    url: "https://keramarch.ru/",
    price: "200",  
    address: "Petropavlovskaya Fortress, 3T",
    addressRus: "Петропавловская крепость, 3Т",
    workingTime: 
        `ПН: 11-18:00 ВТ: 11-17:00 СР: закрыто ЧТ: 11-18:00 ПТ: 11-18:00 СБ: 11-18:00 ВС: 11-18:00`,
    noHolidays: "false",
    days: ['Понедельник', 'Вторник', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    privileges: ["Студенты", "Пенсионеры", "Дошкольники", "Ветераны"], //
    others: ["Вход для маломобильных граждан", "Бесплатное Wi-Fi подключение"], //
  },
  {
    id: 827,
    title: "Корпус Бенуа",
    category: "Искусство",
    coords: {lat: 59.938720, lng: 30.328871}, 
    img: "../korpus-benua.jpeg",
    link: "/korpus-benua",
    url: "https://rusmuseum.ru",
    price: "",  
    address: "Inzhenernaya St., 2-4, 191186",
    addressRus: "Инженерная ул., д. 2-4, 191186",
    workingTime: 
        `ПН: 10-20:00 ВТ: закрыто СР: 10-18:00 ЧТ: 13-21:00 ПТ: 10-18:00 СБ: 10-18:00 ВС: 10-18:00`,
    noHolidays: "false",
    days: ['Понедельник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    privileges: ["Студенты", "Пенсионеры", "Дошкольники", "Ветераны"], //
    others: ["Вход для маломобильных граждан", "Бесплатное Wi-Fi подключение"], //
  },
  {
    id: 828,
    title: "Музей Фаберже",
    category: "Искусство",
    coords: {lat: 59.934715, lng: 30.343151}, 
    img: "../faberzhe.jpeg",
    link: "/faberzhe",
    url: "https://fabergemuseum.ru/posetitelyam/biletyi-v-muzej?utm_campaign=maps&utm_content=main-url&utm_medium=cpc&utm_source=yandex",
    price: "500",  
    address: "Italyanskaya St., 39, 191023",
    addressRus: "Итальянская ул., д. 39, 191023",
    workingTime: 
        `ПН: 10-20:45 ВТ: 10-20:45 СР: 10-20:45 ЧТ: 10-20:45 ПТ: 10-20:45 СБ: 10-20:45 ВС: 10-20:45`,
    noHolidays: "false",
    days: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    privileges: [""], //
    others: ["Вход для маломобильных граждан", "Бесплатное Wi-Fi подключение"], //
  },
];

export default CategMuseums;
