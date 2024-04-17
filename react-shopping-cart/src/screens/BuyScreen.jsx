import { useContext, useEffect, useState } from "react";
import { Card } from "../components/Card";
import { ProductsContext } from "../context/ProductsContext";
import { BuyContext } from "../context/BuyContext";
import Loading from "../components/Loading";
export const BuyScreen = () => {
    const { productes } = useContext(ProductsContext)
    const {buyList,afegirCompra,eliminarCompra,augmentarQuantitat,disminuirQuantitat} = useContext(BuyContext)
    const handleAfegir = (compra) =>
    {
        afegirCompra(compra)
        compra.estado = true;
    }
    const handleEliminar = (p) =>
    {
        eliminarCompra(p.id)
        p.estado = false
    }
    return (
        <>
            <h1>Buy list</h1>
            {
                productes.map( p => 
                    buyList.includes(p) ? 
                    <Card imatge={p.image} titol={p.title} descripcio={p.description} preu={p.price + " ₽"} key={p.id}                      handleAfegir = { () => handleAfegir(p)}
                    handleEliminar = { () => handleEliminar(p)} estado={p.estado}/> 
                    :
                    <Card imatge={p.image} titol={p.title} descripcio={p.description} preu={p.price + " ₽"} key={p.id}                      handleAfegir = { () => handleAfegir(p)}
                    handleEliminar = { () => handleEliminar(p)} estado={p.estado}/> 
                )
            }
            {
                productes.length < 1 ? <div className="d-flex justify-content-center align-items-center h-100 "><Loading className="mx-auto"></Loading></div> : ""
            }
        </>
    )
}

