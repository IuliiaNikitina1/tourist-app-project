import { useState } from "react";
import CategParks from "../components/CategParks";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";
import { isInputElement } from 'react-router-dom/dist/dom';

const ParksPage = () => {
    const [filteredData, setFilteredData] = useState(CategParks);

    const handleChange = (e) => {
        e.preventDefault();
        const result = CategParks.filter((curData) => {
            return curData.title.toLowerCase().includes(e.target.parentElement.children[0].value.toLowerCase());
        });
        setFilteredData(result); 
        if (Object.keys(result).length === 0) {
            const placeForNotification = document.getElementsByClassName("sights-container")[0];
            placeForNotification.insertAdjacentHTML('beforeend','<div> Увы, такой локации нет в нашем списке </div>');
        }
        // e.target.parentElement.children[0].value = "";    
    };

//   const filterHolidays = () => {
//     const result = CategParks.filter((curData) => {
//       return curData.noHolidays === "true";
//     });
//     setData(result);
//   };


  const toggleFilter = (el) => {
    document.getElementById(`aside-filter-drop-${el}`)?.classList.toggle("hide");
    document.getElementById(`aside-filter-drop-${el}`)?.classList.toggle("filter__item-drop--active::before");
  }

    const rent = ['Велосипеды', 'Роликовые коньки', 'Самокаты', 'Лодки', 'Лыжи', 'Сани'];
    const activities = ['Детские площадки', 'Спортивные площадки', 'Каток', 'Зона для пикников', 'Лавочки', 'Кофейни', 'Рестораны и кафе'];
    const weekDays = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

    const filterByRentTypes = (rent) => {
        setFilteredData(
            CategParks.filter((park) => park.rent?.includes(rent))
        )
    }

    const filterByActivities = (act) => {
        setFilteredData(
            CategParks.filter((park) => park.activities?.includes(act))
        )
    }

    const filterByWeekDays = (day) => {
        setFilteredData(
            CategParks.filter((park) => park.days?.includes(day))
        )
    }

  const loc1 = '/main';
  const name1 = 'Главная';
  const loc2 = '/parks'
  const name2 = 'Парки';

  let saved_parks = [];

  return (
    <>
      <NavBar></NavBar>
      <Breadcrumbs loc1={loc1} name1={name1} loc2={loc2} name2={name2}></Breadcrumbs>
      
        <div>
            <div className="form-search">
                <input type="search" className="form-search__input" placeholder="Введите название парка..."></input>
                <button type="submit" className="btn form-search__btn" onClick={handleChange}>
                    <svg className="search-svg" width="1.5rem" height="1.5rem" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.9604 11.4802C19.9604 13.8094 19.0227 15.9176 17.5019 17.4512C16.9332 18.0247 16.2834 18.5173 15.5716 18.9102C14.3594 19.5793 12.9658 19.9604 11.4802 19.9604C6.79672 19.9604 3 16.1637 3 11.4802C3 6.79672 6.79672 3 11.4802 3C16.1637 3 19.9604 6.79672 19.9604 11.4802Z" stroke="#333333" stroke-width="2"/>
                    <path d="M18.1553 18.1553L21.8871 21.8871" stroke="#333333" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                </button>
            </div>
      </div>

        <div className="page-layout">
            <aside className="filters-container">
                <div className="tabs-container">
                    <form className="aside-filter__form">
                        <ul className="aside-filter__list">
                            <li className="aside-filter__item-drop">
                                <p className="aside-filter__item-title filter__item-drop" onClick={() => toggleFilter(1)}>
                                    Фильтры
                                </p>
                                <div className="aside-filter__div" id="aside-filter-drop-1">
                                    <div className="aside-filter__content">

                                        <select className="select" onChange={e => filterByRentTypes(e.target.value)}>
                                            <option value="" selected disabled>
                                                Аренда
                                            </option>
                                            {rent.map(rent => {
                                            return <option key={rent}>{rent}</option>
                                            })}
                                        </select>

                                        <select className="select" onChange={e => filterByActivities(e.target.value)}>
                                            <option value="" selected disabled>
                                                Развлечения
                                            </option>
                                            {activities.map(act => {
                                            return <option key={act}>{act}</option>
                                            })}
                                        </select>

                                        <select className="select select-name" onChange={e => filterByWeekDays(e.target.value)}>
                                            <option value="" selected disabled>
                                                Открыто по дням
                                            </option>
                                            {weekDays.map(day => {
                                            return (<option key={day}>{day}</option>);
                                            })}
                                        </select>

                                    </div>
                                    <button className="btn btn-clear" onClick={() => location.reload()}>ОЧИСТИТЬ</button>
                                </div>
                        </li>
                     </ul>
                 </form>
            </div>
        </aside>
                        
        <div className="sights-container">
            {filteredData.map((values) => {
            const { id, title, img, link } = values;

            return (
                <>
                <div className="sight-item__wrapper" key={id}>
                    <button className="sight-item__favourite" onClick={() => {saved_parks.push(id); localStorage.setItem("saved_parks", JSON.stringify(saved_parks));}}></button>
                    <a href="#" className="sight-item">
                    <p className="sight-item__title">{title}</p>
                    <img src={img} alt="" className="sight-item__img" />
                    </a>
                    <button className="btn btn-add">
                        <li>
                        <Link to={link}>
                Узнать больше
                </Link>
                </li>
                </button>
                </div>
                </>
            );
            })}
        </div>
      </div>
    </>
  );
};

export default ParksPage;
