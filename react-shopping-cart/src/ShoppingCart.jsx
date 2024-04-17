import NavBar from "./components/NavBar"
import {BuyScreen} from './screens/BuyScreen.jsx'
import { Routes, Route, Navigate } from "react-router-dom"
import { CartScreen } from "./screens/CartScreen.jsx"
import { Navigation } from "@mui/icons-material"
import { ProductsProvider } from "./context/ProductsProvider.jsx"
import { BuyProvider } from "./context/BuyProvider.jsx"
export const ShoppingCart = () => {
    return (
        <>
            <h1>
                Shopping Application
            </h1>
            <hr />

            <ProductsProvider>
                <BuyProvider>
                    <NavBar />
                    <Routes>
                        <Route path="/" element={<BuyScreen></BuyScreen>}></Route>
                        <Route path="/*" element={<Navigate to="/"></Navigate>}></Route>
                        <Route path="/cart" element={<CartScreen></CartScreen>}></Route>
                    </Routes>
                </BuyProvider>
            </ProductsProvider>
        </>
    )
}

export default ShoppingCart;