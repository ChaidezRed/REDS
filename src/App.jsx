import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {Menu} from "./Components/Header/Menu.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./Components/Layouts/Home";
import {TenisShop} from "./Components/Layouts/TenisShop";
import {HoodShop} from "./Components/Layouts/HoodShop";
import {TShirtsShop} from "./Components/Layouts/TShirtsShop";
import SignInSide from "./Components/Body/LogIn/LogIn";
import {GeneralContext, GeneralProvider} from "./Components/GeneralContext";
import {ProductsPanel} from "./Components/Layouts/ProductsPanel";
import {Shopping} from "./Components/Layouts/Shopping";

function App() {

  return (
    <div className="App">

            <BrowserRouter>
                <GeneralProvider>
                <Routes>
                    <Route path={"/Home"} element={<Home></Home>}></Route>
                    <Route path={"/Tenis"} element={<TenisShop></TenisShop>}></Route>
                    <Route path={"/Hoods"} element={<HoodShop></HoodShop>}></Route>
                    <Route path={"/Shirts"} element={<TShirtsShop></TShirtsShop>}></Route>
                    <Route path={"/"} element={<SignInSide></SignInSide>}></Route>
                    <Route path={"/products"} element={<ProductsPanel></ProductsPanel>}></Route>
                    <Route path={"/shopping"} element={<Shopping></Shopping>}></Route>
                </Routes>
        </GeneralProvider>
            </BrowserRouter>
    </div>
  )
}

export default App
