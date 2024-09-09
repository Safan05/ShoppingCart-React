import React, { useState } from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, Outlet, RouterProvider } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Menu from './pages/Menu';
import ShoppingCart from './pages/ShoppingCart';

const App = () => {
    const [Products,SetProducts]=useState([
        {Name:"Burger",id:1,count:0,Price:"70 LE",added:0},
        {Name:"Pizza",id:2,count:0,Price:"120 LE",added:0},
        {Name:"Cola",id:3,count:0,Price:"20 LE",added:0},
        {Name:"Fries",id:4,count:0,Price:"30 LE",added:0},
    ]);
    
    function addToCart(prod){
        let NewProducts=[...Products];
        let idx=NewProducts.findIndex(product=>(product===prod));
        let added= NewProducts[idx].added;
        added?added=0:added=1;
        NewProducts[idx].added=added;
        if(added)
            NewProducts[idx].count=1;
        else
            NewProducts[idx].count=0;
        SetProducts(NewProducts);
    }
    function IncHandler(prod){
        let NewProducts=[...Products];
        let idx=NewProducts.findIndex(product=>(product===prod));
        let cnt=NewProducts[idx].count;
        NewProducts[idx].count=cnt+1;
        SetProducts(NewProducts);
    }
    function DeleteHandler(prod){
        let NewProducts=[...Products];
        let idx=NewProducts.findIndex(product=>(product===prod));
        NewProducts[idx].count=0;
        NewProducts[idx].added=0;
        SetProducts(NewProducts);    }
    function ResetHandler(){
        let NewProducts=[...Products];
        for(let i in NewProducts)
            NewProducts[i].count=0;
        SetProducts(NewProducts);
    }
    function getCount(){
        let cnt=0;
        for(let i in Products)
           if(Products[i].count)
            cnt++;
        return cnt;
    }
    const router=createBrowserRouter(
        createRoutesFromElements(
            <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='/Menu' element={<Menu Products={Products} cart={addToCart}/>}/>
            <Route path='/ShoppingCart' element={<ShoppingCart Products={Products} onDelete={DeleteHandler} onInc={IncHandler} onReset={ResetHandler}/>}/>
            </Route>
        )
    )
    
    function Layout(){
        return(
            <>
            <NavBar count={getCount()}/>
            <Outlet/>
            </>
        )
    }
    return ( 
        <RouterProvider router={router}/>
 );
}
 
export default App;