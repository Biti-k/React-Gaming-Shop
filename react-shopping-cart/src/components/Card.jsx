import { useEffect, useState } from "react";
import "../styles/card.css"
export const Card = ({imatge, titol, descripcio, preu, handleAfegir, handleEliminar, estado}) => {
    const [added, setAdded] = useState(false)

    const f_afegirProducte = () => {
        handleAfegir();
    }

    const f_treureProducte = () => {
        handleEliminar();
    }

    useEffect(() => {
        if(estado){
            setAdded(true);
        }else{
            setAdded(false);
        }
    })

    return (
        <div className="tarjeta">
            <img src={imatge} alt={titol} className="tarjeta-imagen" />
            <div className="tarjeta-contenido">
                <h3 className="tarjeta-titulo">{titol}</h3>
                <p className="tarjeta-descripcion">{descripcio}</p>
                <p className="tarjeta-precio">{preu}</p>
                {
                    added ?
                    <button className="boton-quitar" onClick={f_treureProducte}>Remove from cart</button>
                    :
                    <button className="boton-agregar" onClick={f_afegirProducte}>Add to cart</button>
                }
            </div>
        </div>
    )
}

