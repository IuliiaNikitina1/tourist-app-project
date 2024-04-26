import React, { useState, useEffect } from "react";
import CategCathedrals from "../components/CategCathedrals";
import ModalHint from "../components/ModalHint";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import SelectBar from "../components/SelectBar";
import Breadcrumbs from "../components/Breadcrumbs";
import SightItem from '../components/SightItem';
import { ShoppingCartProvider } from '../context/ShoppingCartContext';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function CathedralsPage () {

    const [filteredData, setFilteredData] = useState(CategCathedrals);
    // const [category, setCategory] = useState();
    // const [privilege, setPrivilege] = useState();

    const privileges = ["Дошкольники", "Студенты", "Пенсионеры", "Ветераны"];
    const otherOffers = ["Бесплатная парковка", "Оплата картой", "Билеты онлайн", "Вход для маломобильных граждан", "Аудиогид"];
    const weekDays = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

    const categories = Array.from(
    new Set(CategCathedrals.map(cathedral => cathedral.category))
    );

    const [category, setCategory] = useState();
    const [days, setDays] = useState();
    const [privilege, setPrivilege] = useState();
    const [others, setOthers] = useState();

    useEffect(() => {
        setFilteredData(
            CategCathedrals.filter(cathedral => {
                return (
                    (!category || category === cathedral.category) &&
                    (!days || 
                        (cathedral.days?.includes(days))) &&
                    (!privilege || cathedral.privileges.includes(privilege)) &&
                    (!others || cathedral.others.includes(others))
                )
            })
        )
    }, [category, days, privilege, others]);


    

    const handleChange = (e) => {
        e.preventDefault();
        const result = CategCathedrals.filter((curData) => {
            return curData.title.toLowerCase().includes(e.target.parentElement.children[0].value.toLowerCase());
        });
        setFilteredData(result); 
        if (Object.keys(result).length === 0) {
            const placeForNotification = document.getElementsByClassName("sights-container")[0];
            placeForNotification.insertAdjacentHTML('beforeend',`<div class="div-notification"> Увы, собора с таким названием нет в нашем списке :( </div>`);
            setTimeout(() => location.reload(), 2000);
        }
        // e.target.parentElement.children[0].value = "";
    }; 


    const [value, setValue] = useState([0, 1000]);
        function valuetext(value: number) {
            return `${value}руб.`;
        }

  const handleChangeSlider = (event, newValue) => {
        setValue(newValue);
        const result = CategCathedrals.filter((curData) => {
            return curData.price >= event.target.value[0] && curData.price <= event.target.value[1];
        });
        setFilteredData(result);
    };

  const toggleFilter = (el) => {
    document.getElementById(`aside-filter-drop-${el}`)?.classList.toggle("hide");
    document.getElementById(`aside-filter-drop-${el}`)?.classList.toggle("filter__item-drop--active::before");
  }

  const loc1 = '/main';
  const name1 = 'Главная';
  const loc2 = '/cathedrals'
  const name2 = 'Соборы';

  let saved_cathedrals = [];

  return (
    <>
    {/* <ShoppingCartProvider> */}
      <NavBar></NavBar>
      <Breadcrumbs loc1={loc1} name1={name1} loc2={loc2} name2={name2}></Breadcrumbs>

      <div>
        <form className="form-search">
            <input type="search" id="search" className="form-search__input" placeholder="Введите название собора..."></input>
            <button type="submit" className="form-search__btn" onClick={handleChange}>
                <svg className="search-svg" width="1.5rem" height="1.5rem" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.9604 11.4802C19.9604 13.8094 19.0227 15.9176 17.5019 17.4512C16.9332 18.0247 16.2834 18.5173 15.5716 18.9102C14.3594 19.5793 12.9658 19.9604 11.4802 19.9604C6.79672 19.9604 3 16.1637 3 11.4802C3 6.79672 6.79672 3 11.4802 3C16.1637 3 19.9604 6.79672 19.9604 11.4802Z" stroke="#333333" stroke-width="2"/>
                <path d="M18.1553 18.1553L21.8871 21.8871" stroke="#333333" strokeWidth="2" strokeLinecap="round"/>
                </svg>
            </button>
        </form>
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

                                        <select className="select" onChange={e => setCategory(e.target.value)}>
                                            <option value="" selected disabled>
                                                По религии
                                            </option>
                                            {categories.map(category => {
                                            return <option key={category}>{category}</option>
                                            })}
                                        </select>

                                        <select className="select" onChange={e => setPrivilege(e.target.value)}>
                                            <option value="" selected disabled>
                                                Бесплатный вход для
                                            </option>
                                            {privileges.map(group => {
                                            return <option key={group}>{group}</option>
                                            })}
                                        </select>

                                        <select className="select" onChange={e => setDays(e.target.value)}>
                                            <option value="" selected disabled>
                                                Открыто по дням
                                            </option>
                                            {weekDays.map(day => {
                                            return (<option key={day}>{day}</option>);
                                            })}
                                        </select>
                                
                                        <select className="select" onChange={e => setOthers(e.target.value)}>
                                            <option value="" selected disabled>
                                                Другое
                                            </option>
                                            {otherOffers.map(offer => {
                                            return (<option key={offer}>{offer}</option>);
                                            })}
                                        </select>

                                        <p className="select-title">
                                            Базовый билет (руб.):
                                        </p>

                                        <Box className="price-box" sx={{ width: "20rem", marginLeft: "1rem"}} id="aside-filter-drop-3">
                                            <Slider sx={{marginTop: "1.5rem"}}
                                                getAriaLabel={() => 'Цена билета'}
                                                min={0}
                                                max={1000}
                                                value={value}
                                                onChange={handleChangeSlider}
                                                valueLabelDisplay="on"
                                                getAriaValueText={valuetext}
                                                color="success"
                                            />
                                        </Box>
                                    </div>
                                    <button className="btn btn-clear" onClick={() => location.reload()}>ОЧИСТИТЬ</button>
                                </div>
                            </li>
                        </ul>
                    </form>
                </div>
        </aside>
    
        <div id="sights" className="sights-container">
        {filteredData.map((values) => {
          const { id, title, img, link } = values;

          return (
            <>
              <div className="sight-item__wrapper" key={id}>
                <button className="sight-item__favourite" onClick={() => {saved_cathedrals.push(id); localStorage.setItem("saved_cathedrals", JSON.stringify(saved_cathedrals));}}></button>
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
    {/* </ShoppingCartProvider> */}
    </>
  );
};

export default CathedralsPage;
