import React from 'react';

interface Props {
    title: string,
    img: string,
    url: string,
    addressRus: string,
    workingTime: string,
    price: string,
}

const SightInfo = (props: Props) => {
  
  return (
    <>
        <h2 className="sight-info__heading">{props.title}</h2>
        <div className="sight-info__div">
            <img className="sight-info__img" src={props.img}></img>
                <div className="sight-info__facts">
                    <div>
                        <div className="sight-info__title">Часы работы:</div>
                        <p className="sight-info__text sight-info__time">
                        {props.workingTime}
                        </p>
                    </div>
                    <div>
                        <div className="sight-info__title">Адрес:</div>
                        <p className="sight-info__text">
                            {props.addressRus}
                        </p>
                    </div>
                    <div>
                        <div className="sight-info__title">Стоимость билетов:</div>
                        <p className="sight-info__text">
                            {props.price}
                        </p>
                    </div>
                    <div>
                        <div className="sight-info__title">Официальный сайт:</div>
                        <p className="sight-info__text">
                            {props.url}
                        </p>
                    </div>
                    <div>
                        <div className="sight-info__title">Описание:</div>
                        <p className="sight-info__text">
                            описание
                        </p>
                    </div>
                </div>
        </div>
    </>
  )
}

export default SightInfo