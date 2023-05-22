import React from 'react'
import style from "../Components/Header/Header";
import "bootstrap/dist/css/bootstrap.css";
import { Link, NavLink } from 'react-router-dom';




export const Logo = () => {
    return (<>   <a href="/"><img className="logoIcon" src="/AppImages/flipkart.png" alt="SnapKart" /></a> </>)
}
export const Cart = () => {
    return (<><img className="cartIcon" src="/AppImages/cart-icon.png" alt="cart" />
    </>)
}
export const GetCategoryImage = (props) => {
    const path = "AppImages/Category/"; const source = path.concat(props.imageName); return (<img className="card-img-top" src={source} alt={props.imageName} style={{ height: "4rem", width: "5rem" }} />
    )
}

export const GetProductImage = (imageName) => {
    return `/AppImages/Products/${imageName}`;
}

export const GetProductImageComponent = (props) => {
    return (<img className="card-img-top" src={props.imageName} alt={props.imageName} style={{ height: "25rem", width: "25rem" }} />
    )
}
export const GetProductImageForCart = (props) => {
    return (<img className="card-img-top" src={props.imageName} alt={props.imageName} style={{ height: "10rem", width: "10rem" }} />
    )
}
