import { HStack, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useState } from "react";

const NavBar = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <div className="header">
        <div className="header-top container">
          <div className="header-top__img-container">
                <li>
                    <Link to="/main">
                        <img
                        className="header-top__img"
                        src="../coat_of_arms.png"
                        alt=""
                        />
                    </Link>
                </li>
                <p className="header-top__title">Ваше путешествие в Санкт-Петербург</p>
            </div>

            <div className="goToFavourite__div">
                <button className="goToFavourite" onClick={() => openCart}>
                    <Link to="/loved"><img className="goToFavourite__img" src="../favourite-active.svg"></img></Link>
                </button>
                {/* <div className="goToFavourite__count">{cartQuantity}</div> */}
            </div>

            <button className="goToRoutes">
              <Link to="/routes">
                <img className="goToRoutes__img" src="../route.png">
                </img>
                </Link>
            </button>

            {/* <button className="goToRoutes">
            <a href="map-page">
                <img className="goToRoutes__img" src="../route.png">
                </img>
            </a> 
            </button> */}

        </div>

        <div className="header-bot">
          <div className="container">
            <ul className="menu-categories">
              <li className="menu-categories__item">
                <Link to="/museums">Музеи</Link>
              </li>
              <li className="menu-categories__item">
                <Link to="/squares">Площади</Link>
              </li>
              <li className="menu-categories__item">
                <Link to="/parks">Парки</Link>
              </li>
              <li className="menu-categories__item">
                <Link to="/cathedrals">Соборы</Link>
              </li>
                <li className="dropdown">
                    <button className="dropdown-button">Другое</button>
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.6 0L6 4.6L1.4 0L0 1.4L6 7.4L12 1.4L10.6 0Z" fill="#111111"/>
                    </svg>
                    <div className="dropdown-content">
                        <a><Link to="/markets">Рынки</Link></a>
                        <a><Link to="/monuments">Памятники</Link></a>
                        <a><Link to="/theatres">Театры</Link></a>
                        <a><Link to="/bridges">Мосты</Link></a>
                        <a><Link to="/libraries">Библиотеки</Link></a>
                    </div>
                </li>
            </ul>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default NavBar;
