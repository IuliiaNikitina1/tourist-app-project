import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import Breadcrumbs from "../components/Breadcrumbs";
import SightInfo from '../components/SightInfo';
import CategMuseums from "../components/CategMuseums";

function Kunstkamera() {
  const position = { lat: 53.54, lng: 10 };

  const loc1 = '/museums';
  const name1 = 'Музеи';
  const loc2 = '/kunstkamera'
  const name2 = 'Кунсткамера';

  const { id, title, img, url, price, addressRus, workingTime } = CategMuseums[2];

  return (
    <div>
        <NavBar></NavBar>
        <Breadcrumbs loc1={loc1} name1={name1} loc2={loc2} name2={name2}></Breadcrumbs>
        <SightInfo title={title} url={url} img={img} price={price} addressRus={addressRus} workingTime={workingTime}></SightInfo>
    </div>
  );
}

export default Kunstkamera;