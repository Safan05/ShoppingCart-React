import React from 'react';
import ProductCart from '../components/ProductCart';
const ShoppingCart = (props) => {
    return ( 
        <>
        <button onClick={props.onReset} className="btn btn-secondary btn-sm m-2">Reset</button>
        { props.Products.map((prod)=>{
            if(prod.added)
          return <ProductCart key={prod.id} Product={prod} onDelete={props.onDelete} onInc={props.onInc} > <h3>{prod.id}</h3> </ProductCart>
})}
         </>
     );
}
 
export default ShoppingCart;