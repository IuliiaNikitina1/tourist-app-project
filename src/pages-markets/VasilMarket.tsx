import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import Breadcrumbs from "../components/Breadcrumbs";
import SightInfo from '../components/SightInfo';
import CategMarkets from "../components/CategMarkets";

function VasilMarket() {
  const position = { lat: 53.54, lng: 10 };

  const loc1 = '/markets';
  const name1 = 'Рынки';
  const loc2 = '/vasil_market'
  const name2 = 'Василеостровский рынок';

  const { title, img, url } = CategMarkets[0];

  return (
    <>
        <NavBar></NavBar>
        <Breadcrumbs loc1={loc1} name1={name1} loc2={loc2} name2={name2}></Breadcrumbs>

        <SightInfo title={title} url={url} img={img}></SightInfo>
    </>
  );
}

export default VasilMarket;