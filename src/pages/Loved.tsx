import NavBar from "../components/NavBar";
import { ShoppingCartProvider } from '../context/ShoppingCartContext';
import ShoppingCart from '../components/ShoppingCart';
import Sights from '../components/Sights';

function Loved() {

    const savedList = document.getElementById('div-sights');

    let saved_museums_array = JSON.parse(localStorage.getItem("saved_museums"));
    let saved_cathedrals_array = JSON.parse(localStorage.getItem("saved_cathedrals"));
    let saved_markets_array = JSON.parse(localStorage.getItem("saved_markets"));
    let saved_monuments_array = JSON.parse(localStorage.getItem("saved_monuments"));
    let saved_parks_array = JSON.parse(localStorage.getItem("saved_parks"));
    let saved_squares_array = JSON.parse(localStorage.getItem("saved_squares"));
    let saved_theatres_array = JSON.parse(localStorage.getItem("saved_theatres"));

    const removeItem = (e) => {
        if (saved_museums_array.includes(e)) {
            let saved_museums_edited = saved_museums_array.filter((id: number) => id !== e);
            localStorage.setItem("saved_museums", JSON.stringify(saved_museums_edited));
        } 
        else if (saved_parks_array.includes(e)) {
            let saved_parks_edited = saved_parks_array.filter((id: number) => id !== e);
            localStorage.setItem("saved_parks", JSON.stringify(saved_parks_edited));
        }
        else if (saved_cathedrals_array.includes(e)) {
            let saved_cathedrals_edited = saved_cathedrals_array.filter((id: number) => id !== e);
            localStorage.setItem("saved_cathedrals", JSON.stringify(saved_cathedrals_edited));
        }
        else if (saved_squares_array.includes(e)) {
            let saved_squares_edited = saved_squares_array.filter((id: number) => id !== e);
            localStorage.setItem("saved_squares", JSON.stringify(saved_squares_edited));
        }
        else if (saved_theatres_array.includes(e)) {
            let saved_theatres_edited = saved_theatres_array.filter((id: number) => id !== e);
            localStorage.setItem("saved_theatres", JSON.stringify(saved_theatres_edited));
        }
        else if (saved_markets_array.includes(e)) {
            let saved_markets_edited = saved_markets_array.filter((id: number) => id !== e);
            localStorage.setItem("saved_markets", JSON.stringify(saved_markets_edited));
        }
        else if (saved_monuments_array.includes(e)) {
            let saved_monuments_edited = saved_monuments_array.filter((id: number) => id !== e);
            localStorage.setItem("saved_monuments", JSON.stringify(saved_monuments_edited));
        }

        else {
            savedList.innerHTML = '<div>Вы еще не добавили в избранное ни одной достопримечательности.</div>';
        }
        location.reload();
    }

    return (
    <>
        <NavBar></NavBar>
        <div>
            <h5 className="loved-title">Избранное</h5>
            <div className="sights-container--saved" id="div-sights">
                {Sights.map((sight) => {
                    
                    if (saved_museums_array?.includes(sight.id) || saved_cathedrals_array?.includes(sight.id) || saved_parks_array?.includes(sight.id) || saved_squares_array?.includes(sight.id) || saved_theatres_array?.includes(sight.id) ||
                    saved_monuments_array?.includes(sight.id) ||
                    saved_markets_array?.includes(sight.id)) {
                        return (
                            <>
                                <div className="sight-item__wrapper sight-item__wrapper--saved" key={sight.id}>
                                    <a href="#" className="sight-item sight-item--saved">
                                        <div className="sight-item__title sight-item__title--saved">{sight.title}</div>
                                        <img src={sight.img} alt="" className="sight-item__img sight-item__img--saved" />
                                    </a>
                                    <button className="btn btn-delete" onClick={(e) => removeItem(sight.id)}>Удалить</button>
                                </div>
                            </>
                        )
                    } 
                })}
            </div>
        </div>
    </>
  );
}

export default Loved;