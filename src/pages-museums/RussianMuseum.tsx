import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import Breadcrumbs from "../components/Breadcrumbs";
import SightInfo from '../components/SightInfo';
import CategMuseums from "../components/CategMuseums";

function RussianMuseum() {
  const position = { lat: 53.54, lng: 10 };

  const loc1 = '/museums';
  const name1 = 'Музеи';
  const loc2 = '/russian_museum'
  const name2 = 'Русский музей';

  const { id, title, img, url, addressRus, workingTime, price } = CategMuseums[5]; 

  return (
    <>
        <NavBar></NavBar>
        <Breadcrumbs loc1={loc1} name1={name1} loc2={loc2} name2={name2}></Breadcrumbs>

        <SightInfo title={title} url={url} img={img} addressRus={addressRus} workingTime={workingTime} price={price}></SightInfo>
    </>
  );
}

export default RussianMuseum;