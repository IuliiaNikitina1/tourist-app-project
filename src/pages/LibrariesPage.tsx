import { useState } from "react";
import CategLibraries from "../components/CategLibraries";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";

const LibrariesPage = () => {
  return (
    <>
    <NavBar></NavBar>
    <div>Библиотеки</div>
    </>
  )
}

export default LibrariesPage;