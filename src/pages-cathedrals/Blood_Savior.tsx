import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import Breadcrumbs from "../components/Breadcrumbs";
import SightInfo from '../components/SightInfo';
import CategCathedrals from "../components/CategCathedrals";

function Blood_Savior() {
  const position = { lat: 53.54, lng: 10 };

  const loc1 = '/cathedrals';
  const name1 = 'Соборы';
  const loc2 = '/blood_savior'
  const name2 = 'Спас-на-крови';

  const { id, title, img, url, addressRus, workingTime, price } = CategCathedrals[2]; 

  return (
    <>
        <NavBar></NavBar>
        <Breadcrumbs loc1={loc1} name1={name1} loc2={loc2} name2={name2}></Breadcrumbs>

        <SightInfo title={title} url={url} img={img} addressRus={addressRus} workingTime={workingTime} price={price}></SightInfo>
    </>
  );
}

export default Blood_Savior;