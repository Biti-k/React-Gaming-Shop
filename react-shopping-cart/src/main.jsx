import React from 'react'
import ReactDOM from 'react-dom/client'
import ShoppingCart from './ShoppingCart.jsx'
import { BrowserRouter } from "react-router-dom"
import "./styles/main.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <div className='container'>
        <ShoppingCart />
      </div>
    </React.StrictMode>
  </BrowserRouter>

)
