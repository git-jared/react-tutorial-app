import React from "react"
import productsData from "./vschoolProducts"
import Product from "./components/Product"

function App (){
    const productComponents = productsData.map(
        product => <Product key={product.id} 
            product={product}>
        </Product>
        ) 
    return (
        <div>
            {productComponents}
        </div>
    )
}

export default App