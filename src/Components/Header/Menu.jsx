
import {Link} from "react-router-dom";
import styled, { css } from 'styled-components'
import {useContext, useEffect, useState} from "react";
import {GeneralContext} from "../GeneralContext.jsx";


export function Menu({back}) {
    const MenuBody = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: .5%;
  padding-right: 2% ;
  padding-left: 2%;
  position: fixed;
  width: 100%;
  box-sizing: border-box;
  background: ${back};
      z-index: 1;
  
  h1{
    a{
      font-family: 'Slovic_Demo';
      font-style: normal;
      font-weight: 300;
      font-size: 96px;
      line-height: 115px;
      color: #FFFFFF;
      text-decoration: none;
      background: none;
      transition: all 0.3s ease;
      &:hover{
        font-size: 106px;
        color: firebrick;
      }
    }
  }
  .menu{
    display: flex;
    justify-content: space-between;
    width: 30%;
    a{
      text-decoration: none;
      font-family: 'Oswald';
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 30px;
      color: #FFFFFF;
      background: none;
      padding: 0;
      transition: all 0.3s ease;
      &:hover{
        font-size: 30px;
      }
    }
  }
  a{
    text-decoration: none;
    font-family: 'Oswald';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    color: #FFFFFF;
    background: #1D1D1D;
    padding: 1%;
    transition: all 0.3s ease;
    &:hover{
      font-size: 28px;
    }
  }
`
const {
        setLoginUser,
    setUserSesion,
    setToken,cartItems} = useContext(GeneralContext)
    const [productsLength, setProductsLength] = useState(0)

    useEffect(() => {
        setProductsLength(
            cartItems.reduce((previous, current) => previous +current.amount, 0)
        );
    }, [cartItems]);



    return (
        <>
            <MenuBody >
              <h1 className="title"><Link to={"/Home"}>REDS</Link> </h1>
              <div className="menu">
                  <Link to={"/Tenis"}>Tenis</Link>
                  <Link to={"/Hoods"}>Sueters</Link>
                  <Link to={"/Shirts"}>Playeras</Link>
              </div>
                <Link to={"/"} onClick={() => {
                    setUserSesion([])
                    setLoginUser(false)
                    setToken("")}}>Cerrar Sesion</Link>
                <Link to={"/shopping"}>Carrito de compras {productsLength}</Link>
            </MenuBody>

        </>
    )
}