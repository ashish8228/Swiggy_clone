import React from "react";
import ReactDOM from "react-dom/client";
import Restaurant from "./component/Restaurant";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./component/Home";
import Restaurantmenu from "./component/Restaurantmenu";
import SearchFood from "./component/SearchFood";


function App(){
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element = {<Home></Home>}></Route>
                    <Route path="/restaurant" element = {<Restaurant></Restaurant>}></Route>
                    <Route path="/city/delhi/:id" element={<Restaurantmenu></Restaurantmenu>}></Route>
                    <Route path="/city/delhi/:id/search" element={<SearchFood></SearchFood>}></Route>
                </Routes>
            </BrowserRouter>

        </div>
    )
}



ReactDOM.createRoot(document.getElementById('root')).render(<App></App>)