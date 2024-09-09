import React from 'react';
const ProductMenu = (props) => {
    let cnt=props.product.added;
    return ( 
        <>
        <tr>
            <td>{props.product.id}</td>
            <td>{props.product.Name}</td>
            <td>{props.product.Price}</td>
            <td><i className="fa-solid fa-cart-shopping"  style={ cnt?{color:"black",cursor:"pointer"}:{color:"grey",cursor:"pointer"}} 
            onClick={()=>{props.cart(props.product)}} ></i></td>
       </tr>
        </>
     );
}
 
export default ProductMenu;