import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import Breadcrumbs from "../components/Breadcrumbs";
import SightInfo from '../components/SightInfo';
import CategMuseums from "../components/CategMuseums";

function Hermitage() {
  const position = { lat: 53.54, lng: 10 };

  const loc1 = '/museums';
  const name1 = 'Музеи';
  const loc2 = '/hermitage'
  const name2 = 'Эрмитаж';

  const { id, title, img, url, addressRus, price, workingTime } = CategMuseums[0]; 

  return (
    <>
    <NavBar></NavBar>
    <Breadcrumbs loc1={loc1} name1={name1} loc2={loc2} name2={name2}></Breadcrumbs>

    <SightInfo title={title} url={url} img={img} addressRus={addressRus} workingTime={workingTime} price={price}></SightInfo>
    </>
  );
}

export default Hermitage;