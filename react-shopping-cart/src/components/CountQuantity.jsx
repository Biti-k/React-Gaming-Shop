import { useState } from "react"

export const CountQuantity = ({item, handleAumentar, handleDecrementar}) => {

    return (
        <>
            <div className="cantidad d-flex gap-3 align-items-center">
                <button className="btn btn-warning" onClick={() => {handleDecrementar(item.id)}}>-</button>
                <p> {item.cantidad} </p>
                <button className="btn btn-warning" onClick={() => {handleAumentar(item.id)}}>+</button>
            </div>
        </>
    )
}