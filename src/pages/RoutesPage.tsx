import React, { useState, useRef } from "react";
import NavBar from "../components/NavBar";
import Directions from "../components/Directions";
import { easeIn } from 'framer-motion';
import { formControlClasses } from '@mui/material';
import CategMuseums from '../components/CategMuseums';
import Sights from '../components/Sights';
import { Loader } from '@googlemaps/js-api-loader';
import { useLoadScript } from '@react-google-maps/api';
import { useJsApiLoader, GoogleMap, Marker } from '@react-google-maps/api';
// import {APIProvider, Map, Marker} from '@vis.gl/react-google-maps';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

import type { YMapLocationRequest } from 'ymaps3';

function RoutesPage() { 

    // async function initMap(): Promise<void> {
    // await ymaps3.ready;

    // const LOCATION: YMapLocationRequest = {
    //     center: [59.94, 30.3],
    //     zoom: 12
    // };

    // const { YMap, YMapDefaultSchemeLayer } = ymaps3;

    // const map = new YMap(document.getElementById('map'), { location: LOCATION });
    // map.addChild(new YMapDefaultSchemeLayer({}));

    // }

    // initMap();

    ///////////////////////

    // const {isLoaded} = useLoadScript({
    //     googleMapsApiKey: "AIzaSyBLs4MoTHsZdJ5GIswrh5qtRy73tjv3r2Q",
    // });

    // if (!isLoaded) return <div>Загрузка карты...</div>;

    // const [directionsResponse, setDirectionsResponse] = useState(null);
    // const [distance, setDistance] = useState("");
    // const [duration, setDuration] = useState("");

    // const originRef = useRef();
    // const destinationRef = useRef();

    const mapState = {
        center: [59.94, 30.3],
        zoom: 12,
    };

    let museums_points = JSON.parse(localStorage.getItem("saved_museums"));
    let squares_points = JSON.parse(localStorage.getItem("saved_squares"));
    let cathedrals_points = JSON.parse(localStorage.getItem("saved_cathedrals"));
    let markets_points = JSON.parse(localStorage.getItem("saved_markets"));
    let theatres_points = JSON.parse(localStorage.getItem("saved_theatres"));
    let parks_points = JSON.parse(localStorage.getItem("saved_parks"));
    let monuments_points = JSON.parse(localStorage.getItem("saved_monuments"));

    const points = (museums_points.concat(squares_points, cathedrals_points, markets_points, theatres_points, parks_points, monuments_points)).filter((point) => point !== null);
    let places = [];

    Sights.map((sight) => {
        const {coords, id} = sight;
        if (points.includes(id)) {
            places.push(coords);
        }
    });

    // console.log(places);


    let used_points = []; 
    let stops = [];
    const stopovers_number = points.length-2;

    // function getStartPoint(e) {
    //     used_points.push(e);
    //     let stops = points.filter(point => {
    //     used_points.includes(point) !== true;
    //     });
    //     console.log(used_points);
    // }

    // function getFinalPoint(e) {
    //     used_points.push(e);
    //     let stops = points.filter(point => {
    //     used_points.includes(point) !== true;
    //     });
    //     console.log(used_points);
    // }

    let order = [];

    // сохранили последовательность в локальном хранилище:
    const setOrder = (e, id) => {
        // const point_order = e;
        console.log(`${id}'s number is ${e}`);
        localStorage.setItem(id, JSON.stringify(e));
    }

    // let multiRoute = new ymaps3.multiRouter.MultiRoute(
    //       {
    //         // Точки маршрута. Точки могут быть заданы как координатами, так и адресом.
    //         referencePoints: [
    //           [59.939864, 30.314566],
    //           [59.934345, 30.324611],
    //           [59.927394, 30.331054],
    //         ],
    //       },
    //       {
    //         // Автоматически устанавливать границы карты так,
    //         // чтобы маршрут был виден целиком.
    //         boundsAutoApply: true,
    //         routeActiveStrokeWidth: 6,
    //         routeActiveStrokeStyle: "solid",
    //         routeActiveStrokeColor: "#111111",
    //       }
    // );

    // Добавление маршрута на карту.
    // myMap.geoObjects.add(multiRoute);

    ////////////////////////////

    return (
    <>
    <NavBar></NavBar>

    <div className="map-page__container">
            <div className="map-page__map" id="map">
            <YMaps query={{apikey: "https://api-maps.yandex.ru/v3/?apikey=0f2e41fe-fa5c-4a81-adb5-58e427e6b51a&lang=ru_RU"}}>
                <Map 
                    defaultState={mapState} 
                    // instanceRef={map}
                    // onLoad={addRoute}
                    
                    modules={["control.ZoomControl", "control.FullscreenControl", "multiRouter.MultiRoute"]}
                    width="550px" 
                    height="450px">
                        {Sights.map((sight) => {
                            const {title, coords, id} = sight;
                            if (points.includes(id)) {
                                return (
                                    <Placemark
                                        modules={["geoObject.addon.balloon"]}
                                        defaultGeometry={coords}
                                        properties={{
                                        balloonContentBody:
                                        `Это ${title}. Вам здесь понравится!`,
                                        }}
                                    />
                                )
                            }
                        })}
                </Map>
        </YMaps>
                {/* <GoogleMap 
                center={center} 
                zoom={11} 
                mapContainerStyle={{width: "550px", height: "450px"}}
                >
                {places.map((place) => {
                        return (
                            <Marker position={place}></Marker>
                        )
                })}
                </GoogleMap> */}
            </div>
        
        <div className="map-page__sights">
                <p className="map-page__sights-title">Задайте последовательность вашего маршрута:</p>

                <div className="map-page__sights-container">
                
                    {Sights.map((values) => {
                        const {title, img, id} = values;
                        const id_string = id.toString();

                        if (points.includes(id)) {
                        return (
                            <>
                                <div className="map-page__sight">
                                    <img className="map-page__sights-img" src={img} alt={title} />
                                    
                                    <select className="map-page__sights-select" id={id_string} onChange={(e) => {setOrder(e.target.value, e.target.id);}}>
                                        <option disabled selected>Выбрать</option>
                                        <option value="1">1</option>
                                        <option value="2">{points.length > 1 ? 2 : null}</option>
                                        <option value="3">{points.length > 2 ? 3 : null}</option>
                                        <option value="4">{points.length > 3 ? 4 : null}</option>
                                        <option value="5">{points.length > 4 ? 5 : null}</option>
                                        <option value="6">{points.length > 5 ? 6 : null}</option>
                                        <option value="7">{points.length > 6 ? 7 : null}</option>
                                        <option value="8">{points.length > 7 ? 8 : null}</option>
                                        <option value="9">{points.length > 8 ? 9 : null}</option>
                                        <option value="10">{points.length > 9 ? 10 : null}</option>
                                    </select>
                                    <p className="map-page__sights-names">{title}</p>
                                </div>
                            </>
                        )
                        }
                    })}
                                {/* <select style={{marginBottom: "1rem"}}>
                                    <option selected disabled>Выбрать</option>
                                    {Sights.map((values) => {
                                    const {id, title, img} = values;
                                        if (points.includes(id)) {
                                            return (
                                                <option>{title}</option>
                                            )
                                        }
                                })}
                                </select> */}
                </div>

                
                <button className="btn btn-build-route" style={{marginTop: "1rem"}} onClick={() => console.log('added')}>Построить маршрут!</button>
            </div> 
        </div>
    </>
  );
}

export default RoutesPage;



///////////////