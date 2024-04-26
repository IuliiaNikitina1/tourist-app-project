import React from 'react';
import { Link } from "react-router-dom";

function SightItem (props) {
    const {item} = props;
    
  return (
    <>
    <div className="sight-item__wrapper" key={item.id}>
                <button className="sight-item__favourite"></button>
                <a href="#" className="sight-item">
                  <p className="sight-item__title">{item.title}</p>
                  <img src={item.img} alt="" className="sight-item__img" />
                </a>
                <button className="btn btn-add">
                    <li>
                        <Link to={item.link}>
                            Узнать больше
                        </Link>
                    </li>
                </button>
    </div>
    </>
  )
}

export default SightItem;