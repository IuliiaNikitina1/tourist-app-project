import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import Breadcrumbs from "../components/Breadcrumbs";

function MariinConcert() {
  const position = { lat: 53.54, lng: 10 };

  const loc1 = '/theatres';
  const name1 = 'Театры';
  const loc2 = '/mariin_concert'
  const name2 = 'Мариинский театр (концертный зал)';

  return (
    <div>
        <NavBar></NavBar>
        <Breadcrumbs loc1={loc1} name1={name1} loc2={loc2} name2={name2}></Breadcrumbs>
        
        <h2>MariinConcert</h2>
    </div>
  );
}

export default MariinConcert;