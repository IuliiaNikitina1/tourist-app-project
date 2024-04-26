import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import Breadcrumbs from "../components/Breadcrumbs";

function MarsovoField() {
  const position = { lat: 53.54, lng: 10 };

  const loc1 = '/parks';
  const name1 = 'Парки';
  const loc2 = '/marsovo_field'
  const name2 = 'Марсово поле';
  
  return (
    <>
        <NavBar></NavBar>
        <Breadcrumbs loc1={loc1} name1={name1} loc2={loc2} name2={name2}></Breadcrumbs>
        
        <h2>MarsovoField</h2>
    </>
  );
}

export default MarsovoField;