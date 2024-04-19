import { useContext, useEffect, useState } from "react";
import { Card } from "../components/Card";
import { ProductsContext } from "../context/ProductsContext";
import { BuyContext } from "../context/BuyContext";
import Loading from "../components/Loading";
import { Filter } from "../components/Filter";
export const BuyScreen = () => {
    const { productes } = useContext(ProductsContext)
    const [genero, setGenero] = useState('');
    const {buyList,afegirCompra,eliminarCompra,augmentarQuantitat,disminuirQuantitat} = useContext(BuyContext)
    const handleAfegir = (compra) =>
    {
        afegirCompra(compra)
        compra.estado = true;
    }
    const handleEliminar = (p) =>
    {
        eliminarCompra(p)
        p.estado = false
    }

    const cambiarGenero = (g) => 
    {
        setGenero(g);
    }

    return (
        <>
            <h1>Buy list</h1>
            <Filter setGenre={cambiarGenero} genre={genero} />
            {
                productes.map( p => 
                    genero == '' ?
                    <Card imatge={p.data.header_image} titol={p.data.name} descripcio={p.data.short_description} preu={p.data.price_overview.final_formatted} key={p.key} handleAfegir = { () => handleAfegir(p)} handleEliminar = { () => handleEliminar(p)} estado={p.estado} link={p.data.website} /> 
                    :
                    p.data.genres.find(genre => genre.description.toLowerCase() == genero.toLocaleLowerCase()) ?
                    <Card imatge={p.data.header_image} titol={p.data.name} descripcio={p.data.short_description} preu={p.data.price_overview.final_formatted} key={p.key} handleAfegir = { () => handleAfegir(p)} handleEliminar = { () => handleEliminar(p)} estado={p.estado} link={p.data.website} /> 
                    :
                    ''
                )
            }
            {
                productes.length < 1 ? <div className="d-flex justify-content-center align-items-center h-100 "><Loading className="mx-auto"></Loading></div> : ""
            }
        </>
    )
}

