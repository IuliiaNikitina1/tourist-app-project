import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import Breadcrumbs from "../components/Breadcrumbs";

function MariinOld() {
  const position = { lat: 53.54, lng: 10 };

  const loc1 = '/theatres';
  const name1 = 'Театры';
  const loc2 = '/mariin_old'
  const name2 = 'Мариинский театр (старая сцена)';

  return (
    <div>
        <NavBar></NavBar>
        <Breadcrumbs loc1={loc1} name1={name1} loc2={loc2} name2={name2}></Breadcrumbs>
        
        <h2>MariinOld</h2>
    </div>
  );
}

export default MariinOld;