import { useEffect, useState } from "react";
import CategMarkets from "../components/CategMarkets";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";

function MarketsPage () {

    const [filteredData, setFilteredData] = useState(CategMarkets);
    const [category, setCategory] = useState();
    const [days, setDays] = useState();

    const categories = Array.from(
    new Set(CategMarkets.map(market => market.category))
    );
    const weekDays = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

    useEffect(() => {
        setFilteredData(
            CategMarkets.filter(market => {
                return (
                    (!category || category === market.category) &&
                    (!days || 
                        (market.days.includes(days)))
                )
            })
        )
    }, [category, days]);

    // const filterByCategory = (category) => {
    //     setFilteredData(
    //         CategMarkets.filter((categ) => categ.category === category)
    //     )
    // };

    // const filterByWeekDays = (day) => {
    //     setFilteredData(
    //         CategMarkets.filter((market) => market.days?.includes(day))
    //     )
    // }

    const handleChange = (e) => {
        e.preventDefault();
        const result = CategMarkets.filter((curData) => {
            return curData.title.toLowerCase().includes(e.target.parentElement.children[0].value.toLowerCase());
        });
        setFilteredData(result); 
        if (Object.keys(result).length === 0) {
            const placeForNotification = document.getElementsByClassName("sights-container")[0];
            placeForNotification.insertAdjacentHTML('beforeend','<div> Увы, такого рынка нет в нашем списке </div>');
            setTimeout(() => location.reload(), 1500);
        }
        e.target.parentElement.children[0].value = "";
    };


    const toggleFilter = (el) => {
    document.getElementById(`aside-filter-drop-${el}`)?.classList.toggle("hide");
    document.getElementById(`aside-filter-drop-${el}`)?.classList.toggle("filter__item-drop--active::before");
    };

    const loc1 = '/main';
    const name1 = 'Главная';
    const loc2 = '/markets'
    const name2 = 'Рынки';

    let saved_markets = [];

    // const clearFilters = () => {
    //     setCategory();
    //     setDays();
    // };


    return (
    <div>
      <NavBar></NavBar>
      <Breadcrumbs loc1={loc1} name1={name1} loc2={loc2} name2={name2}></Breadcrumbs>

        <div>
            <form className="form-search">
                <input type="search" id="search" className="form-search__input" placeholder="Введите название рынка..."></input>
                <button type="submit" className="btn form-search__btn" onClick={handleChange}>
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
                                    <option value="" selected>
                                        По категории
                                    </option>
                                    {categories.map(category => {
                                    return <option key={category}>{category}</option>
                                    })}
                                </select>
                                <select className="select" onChange={e => setDays(e.target.value)}>
                                    <option value="" selected>
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
                <button className="sight-item__favourite" onClick={() => {saved_markets.push(id); localStorage.setItem("saved_markets", JSON.stringify(saved_markets));}}></button>
                <a href="#" className="sight-item">
                  <p className="sight-item__title">{title}</p>
                  <img src={img} alt="" className="sight-item__img" />
                </a>
                <div>
                  <button className="btn btn-add">
                    <li>
                    <Link to={link}>
               Узнать больше
                    </Link>
                    </li>
                    </button>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
    </div>
  );
};

export default MarketsPage;
