import React from 'react';
import ProductMenu from '../components/ProductMenu';
const Menu = (props) => {
    return ( 
    <>
        <table className="table table-hover m-2" style={{width:"95%"}}>
        <thead>
        <tr>
            <th>#</th>
            <th>Name</th>
            <th>Price</th>
            <th>Add</th>
            </tr>
        </thead>
        <tbody>
            {props.Products.map(prop=>(<ProductMenu product={prop} key={prop.id} cart={props.cart}/>))}
        </tbody>
    </table>
    </> );
}
 
export default Menu;