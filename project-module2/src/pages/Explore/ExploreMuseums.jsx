import { Route, Routes } from "react-router-dom";
import MuseumsCards from "./MuseumsCards";
import Sidebar from "./Sidebar";

function ExploreMuseums () {
    return(
        <>
        <MuseumsCards/>
        <Sidebar/>
        </>
    )
}

export default ExploreMuseums;