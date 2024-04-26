import React from 'react';
import { Link } from "react-router-dom";

interface Props {
    loc1: string;
    name1: string;
    loc2: string;
    name2: string;
}

const Breadcrumbs: React.FC<Props> = ({loc1, name1, loc2, name2}) => {
  return (
    <>
    <div className="breadcrumbs">
        <div className="container">
            <ul className="breadcrumbs__list">
                <li className="breadcrumbs__list-item">
                    <Link to={loc1}>
                        {name1} 
                        <span className="breadcrumbs__list-span">/</span>
                        </Link>
                </li>
                <li className="breadcrumbs__list-item">
                    <Link to={loc2}>
                        {name2}
                        </Link>
                </li>
            </ul>
        </div>
    </div>
    </>
  )
}

export default Breadcrumbs;