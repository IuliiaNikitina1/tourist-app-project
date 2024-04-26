import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import SightPage from './pages/SightPage';

import MuseumsPage from "./pages/MuseumsPage";
import TheatresPage from "./pages/TheatresPage";
import ParksPage from "./pages/ParksPage";
import CathedralsPage from "./pages/CathedralsPage";
import MarketsPage from "./pages/MarketsPage";
import MainPage from "./pages/MainPage";
import RoutesPage from "./pages/RoutesPage";
import SquaresPage from "./pages/SquaresPage";
import MonumentsPage from './pages/MonumentsPage';
import BridgesPage from './pages/BridgesPage';
import LibrariesPage from './pages/LibrariesPage';
import Loved from './pages/Loved';

// pages-museums
import Hermitage from "./pages-museums/Hermitage";
import Erarta from "./pages-museums/Erarta";
import Creiser from "./pages-museums/Creiser";
import Kunstkamera from "./pages-museums/Kunstkamera";
import GrandMaket from "./pages-museums/GrandMaket";
import RussianMuseum from "./pages-museums/RussianMuseum";

// pages-theatres
import MariinOld from "./pages-theatres/MariinOld";
import MariinNew from "./pages-theatres/MariinNew";
import MariinConcert from "./pages-theatres/MariinConcert";
import BigDramaTheatre from "./pages-theatres/BigDramaTheatre";
import AlexandrinTheatre from "./pages-theatres/AlexandrinTheatre";
import DollsTheatre from "./pages-theatres/DollsTheatre";

// pages-cathedrals
import Isaac from './pages-cathedrals/Isaac';
import Kazan from './pages-cathedrals/Kazan';
import Smolniy from './pages-cathedrals/Smolniy';
import Mechet from './pages-cathedrals/Mechet';
import Petropavlovskiy from './pages-cathedrals/Petropavlovskiy';
import Blood_Savior from './pages-cathedrals/Blood_Savior';

// pages-markets
import ApraksinDvor from './pages-markets/ApraksinDvor';
import SytniyMarket from './pages-markets/SytniyMarket';
import UdelnyMarket from './pages-markets/UdelnyMarket';
import MalcevskyMarket from './pages-markets/MalcevskyMarket';
import SennoyMarket from './pages-markets/SennoyMarket';
import VasilMarket from './pages-markets/VasilMarket';

// pages-parks
import AlexanderGarden from './pages-parks/AlexanderGarden';
import SummerGarden from './pages-parks/SummerGarden';
import ParkThree from './pages-parks/ParkThree';
import MikhailGarden from './pages-parks/MikhailGarden';
import MarsovoField from './pages-parks/MarsovoField';
import ParkCulture from './pages-parks/ParkCulture';
import YMapsMap from '@pbe/react-yandex-maps/typings/Map';

// async function initMap() {
//     await ymaps3.ready;

//     const {YMap, YMapDefaultSchemeLayer, multiRouter} = ymaps3;

//     const map = new YMap(
//         document.getElementById('map'),
//         {
//             location: {
//                 center: [59.94, 30.3],
//                 zoom: 12
//             }
//         }
//     );

//     const pointA = [59.939864, 30.314566];
//     const pointB = [59.934345, 30.324611];

//     let multiRoute = new multiRouter.MultiRoute({
//         referencePoints: [
//             pointA,
//             pointB
//         ],
//         params: {
//             //Тип маршрутизации - пешеходная маршрутизация.
//             routingMode: 'pedestrian'
//         }
//         }, {
//             // Автоматически устанавливать границы карты так, чтобы маршрут был виден целиком.
//             boundsAutoApply: true
//     });

//     map.addChild(new YMapDefaultSchemeLayer());
//     map.geoObjects.add(multiRoute);
// }

// initMap();

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },

  {
    path: "main",
    element: <App></App>,
  },
{
    path: "loved",
    element: <Loved></Loved>,
  },
  {
    path: "museums",
    element: <MuseumsPage></MuseumsPage>,
  },
  {
    path: "theatres",
    element: <TheatresPage></TheatresPage>,
  },
  {
    path: "parks",
    element: <ParksPage></ParksPage>,
  },
  {
    path: "cathedrals",
    element: <CathedralsPage></CathedralsPage>,
  },
  {
    path: "markets",
    element: <MarketsPage></MarketsPage>,
  },
  {
    path: "routes",
    element: <RoutesPage></RoutesPage>,
  },

  // museums
  {
    path: "hermitage",
    element: <Hermitage></Hermitage>,
  },
  {
    path: "erarta",
    element: <Erarta></Erarta>,
  },
  {
    path: "creiser",
    element: <Creiser></Creiser>,
  },
  {
    path: "kunstkamera",
    element: <Kunstkamera></Kunstkamera>,
  },
  {
    path: "grand_maket",
    element: <GrandMaket></GrandMaket>,
  },
  {
    path: "russian_museum",
    element: <RussianMuseum></RussianMuseum>,
  },

  // theatres
  {
    path: "mariin_old",
    element: <MariinOld></MariinOld>,
  },
  {
    path: "mariin_new",
    element: <MariinNew></MariinNew>,
  },
  {
    path: "mariin_concert",
    element: <MariinConcert></MariinConcert>,
  },
  {
    path: "big_drama",
    element: <BigDramaTheatre></BigDramaTheatre>,
  },
  {
    path: "dolls_theatre",
    element: <DollsTheatre></DollsTheatre>,
  },
  {
    path: "alexandrin_theatre",
    element: <AlexandrinTheatre></AlexandrinTheatre>,
  },

  // cathedrals

  {
    path: "isaac",
    element: <Isaac></Isaac>,
  },
  {
    path: "kazan",
    element: <Kazan></Kazan>,
  },
  {
    path: "mechet",
    element: <Mechet></Mechet>,
  },
  {
    path: "smolniy",
    element: <Smolniy></Smolniy>,
  },
  {
    path: "petropavlovskiy",
    element: <Petropavlovskiy></Petropavlovskiy>,
  },
  {
    path: "blood_Savior",
    element: <Blood_Savior></Blood_Savior>,
  },

  // parks

  {
    path: "alexander_garden",
    element: <AlexanderGarden></AlexanderGarden>,
  },
  {
    path: "summer_garden",
    element: <SummerGarden></SummerGarden>,
  },
  {
    path: "park_three",
    element: <ParkThree></ParkThree>,
  },
  {
    path: "mikhail_garden",
    element: <MikhailGarden></MikhailGarden>,
  },
  {
    path: "marsovo_field",
    element: <MarsovoField></MarsovoField>,
  },
  {
    path: "park_culture",
    element: <ParkCulture></ParkCulture>,
  },

  // markets

  {
    path: "apraksin_dvor",
    element: <ApraksinDvor></ApraksinDvor>,
  },
  {
    path: "sytniy_market",
    element: <SytniyMarket></SytniyMarket>,
  },
  {
    path: "udelny_market",
    element: <UdelnyMarket></UdelnyMarket>,
  },
  {
    path: "malcevsky_market",
    element: <MalcevskyMarket></MalcevskyMarket>,
  },
  {
    path: "sennoy_market",
    element: <SennoyMarket></SennoyMarket>,
  },
  {
    path: "vasil_market",
    element: <VasilMarket></VasilMarket>,
  },
  {
    path: "routes",
    element: <RoutesPage></RoutesPage>,
  },


  // squares

  {
    path: "squares",
    element: <SquaresPage></SquaresPage>,
  },

  // monuments

  {
    path: "monuments",
    element: <MonumentsPage></MonumentsPage>,
  },

  // bridges

  {
    path: "bridges",
    element: <BridgesPage></BridgesPage>,
  },

  // libraries

  {
    path: "libraries",
    element: <LibrariesPage></LibrariesPage>,
  },


]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

/* <React.StrictMode>
  <ChakraProvider theme={theme}>
    <ColorModeScript
      initialColorMode={theme.config.initialColorMode}
    ></ColorModeScript>
    <App />
  </ChakraProvider>
</React.StrictMode>;
*/
