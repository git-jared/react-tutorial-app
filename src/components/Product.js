import React from "react"


function Product (props){
let display = "block";
if (props.price === 0)
{
    display = "none";
}
    return(
<div>
    <h1 >Product: {props.product.name}</h1>
    <p3 style={{display: display, color:"green"}}>price: {props.product.price.toLocaleString("en-US", {style: "currency", currency:"USD"})}</p3>
    <p>description: {props.product.description}</p>
</div>
    )
}

export default Product