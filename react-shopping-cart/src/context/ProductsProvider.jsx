import { ProductsContext } from "./ProductsContext"
import { useState, useEffect } from "react"
    
export const ProductsProvider = ({children}) => {
    const [productes, setProductes] = useState([])

    const fetchProductes = async () => {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        console.log(data);
        data.map((e) => {
            e.estado = false;
        })
        setProductes(data);
        console.log(productes)
    }

    useEffect( () => {
        fetchProductes();
    }, [])

    return (
        <ProductsContext.Provider value={{productes}}>
            {children}
        </ProductsContext.Provider>
    )
}