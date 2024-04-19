import { BuyContext } from "./BuyContext"
import { useReducer } from "react"

const initialState = []

export const BuyProvider = ({children}) => {
    const buyReducer = (state = initialState, action = {}) => {
        switch(action.type){
            case '[CART] Add Product':
                return [...state, action.payload]
            case "[CART] Delete Product":
                return state.filter((p) => p.key !== action.payload.key)
            case "[CART] Add Quantity":
                return state.map(item => {
                    if(item.key == action.payload){
                        const qt = item.cantidad + 1;
                        return {...item, cantidad:qt}
                    }else{
                        return item
                    }
                })
            case "[CART] Decrement Quantity":
                return state.map(item => {
                    if(item.key == action.payload && item.cantidad > 1){
                        const qt = item.cantidad - 1;
                        return {...item, cantidad:qt}
                    }else{
                        return item
                    }
                })
        }
    }

    const [buyList, dispatch] = useReducer(buyReducer, initialState)

    const afegirCompra = (compra) => {
        compra.cantidad = 1;
        const action = {
            type: '[CART] Add Product',
            payload: compra
        }
        dispatch(action)
    }

    const eliminarCompra = (compra) => {
        const action = {
            type: "[CART] Delete Product",
            payload: compra
        }
        dispatch(action)
    }

    const augmentarQuantitat = (id) => {
        const action = {
            type: "[CART] Add Quantity",
            payload: id
        }
        dispatch(action)
    }

    const disminuirQuantitat = (id) => {
        const action = {
            type: "[CART] Decrement Quantity",
            payload: id
        }
        dispatch(action)
    }

    return (
        <BuyContext.Provider value={{buyList,afegirCompra, eliminarCompra, augmentarQuantitat, disminuirQuantitat}}>
            {children}
        </BuyContext.Provider>
    )
}