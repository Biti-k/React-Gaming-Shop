import { NavLink } from "react-router-dom"
import { Badge } from "@mui/material"
import { ShoppingCart } from "@mui/icons-material"
import { useState, useContext } from "react"
import { BuyContext } from "../context/BuyContext"

export const NavBar = () => {
    const {buyList} = useContext(BuyContext)
    return (
        <>
            <nav className="navbar navbar-expand-sm bg-body-tertiary mb-3">
                <div className="container-fluid">
                    <NavLink to="/" className="navbar-brand">Shop App</NavLink>
                    <div className="navbar-collapse">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink to="/cart" className="nav-link" aria-current="page">Shopping Cart</NavLink>
                            </li>
                        </ul>
                        <NavLink to="/cart" >
                            <Badge badgeContent={buyList.length} color="secondary">
                                <ShoppingCart color="primary" />
                            </Badge>
                        </NavLink>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar;