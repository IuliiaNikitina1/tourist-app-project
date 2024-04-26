import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import Breadcrumbs from "../components/Breadcrumbs";
import SightInfo from '../components/SightInfo';
import CategMarkets from "../components/CategMarkets";

function ApraksinDvor() {
  const position = { lat: 53.54, lng: 10 };

  const loc1 = '/markets';
  const name1 = 'Рынки';
  const loc2 = '/apraksin_dvor'
  const name2 = 'Апраксин двор';

  return (
    <>
        <NavBar></NavBar>
        <Breadcrumbs loc1={loc1} name1={name1} loc2={loc2} name2={name2}></Breadcrumbs>
        
        <h2>ApraksinDvor</h2>
    </>
  );
}

export default ApraksinDvor;