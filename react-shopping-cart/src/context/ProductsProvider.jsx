import { ProductsContext } from "./ProductsContext"
import { useState, useEffect } from "react"
    
export const ProductsProvider = ({children}) => {
    const [productes, setProductes] = useState([])
    const availableGames = [1091500, 1716740, 1326470, 1086940, 990080, 359550, 1174180, 2050650]
    const fetchProductes = async () => {
        const corsAnywhere = 'https://cors-anywhere.herokuapp.com/';
        const steamApi = "store.steampowered.com/api/appdetails?appids=";
        const promises = availableGames.map(async (appId) => {
            const response = await fetch(corsAnywhere + steamApi + appId, {
              method: 'GET',
              headers: new Headers({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Accept-Language': 'en',
              })
            });
            return await response.json();
          });
        
          let gameDetails = await Promise.all(promises);
          gameDetails = gameDetails.map((e,i) => {
            let keys = Object.keys(e);
            console.log(e[keys[0]]);
            console.log(keys[0]);
            e = e[keys[0]];
            e['key'] = i;
            e['estado'] = false;
            return e;
          })
          setProductes(gameDetails);
          console.log(gameDetails);
    };

    useEffect( () => {
        fetchProductes();
    }, [])

    return (
        <ProductsContext.Provider value={{productes}}>
            {children}
        </ProductsContext.Provider>
    )
}