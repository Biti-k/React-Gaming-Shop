import { useContext, useState } from "react"
import { ProductsContext } from "../context/ProductsContext"
import { BuyContext } from "../context/BuyContext"
import { CountQuantity } from "../components/CountQuantity"
export const CartScreen = () => {
    const { productes } = useContext(ProductsContext)
    const {buyList,afegirCompra,eliminarCompra,
        augmentarQuantitat,disminuirQuantitat } = useContext(BuyContext)
    const handleAfegir = (compra) => {
        afegirCompra(compra)
    }

    const handleEliminar = (compra) => {
        productes.map((e)=>{
            if(e.id == compra.id){
                e.estado = false;
            }
        })
        eliminarCompra(compra.id)
    }

    function calcTotal(){
        return buyList.reduce((total, item)=>
            total + item.price*item.cantidad, 0
        ).toFixed(2)
    }
    

    const [total, setTotal] = useState(0)

    return (
        <>
            <h1>Shopping Cart</h1>
            {
                buyList.length < 1 ? 
                <div class="alert alert-warning mt-3 " role="alert">
                You have not added anything yet
                </div>
                :
                    <>
                    <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Total</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            buyList.map(e =>
                                <tr key={e.id}>
                                    <th scope="row">{e.title}</th>   
                                    <td>{e.price} ₽</td>
                                    <td> <CountQuantity handleAumentar={()=>{augmentarQuantitat(e.id)}} handleDecrementar={()=>{disminuirQuantitat(e.id)}} item={e}></CountQuantity> </td>
                                    <td>{(e.price * e.cantidad).toFixed(2)} ₽</td>
                                    <td><button className="btn btn-danger" onClick={() => {handleEliminar(e)}}>Remove</button></td>
                                </tr>
                            )
                        }   
                    </tbody>
                </table>
                <p>Total everything: {
                    calcTotal() + " ₽"
                }</p>
                <div className="d-grid gap-2">
                    <button className="btn btn-warning">Comprar</button>
                </div>
                </>
            }

        </>
    )
}