<<<<<<< HEAD
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import SmallCard from './Component/SmallCard/SmallCard';
import pic1 from './assets/imgs/padge1.png'
import ProductCard from './Component/ProductCard/ProductCard';

=======
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home';
import Products from './Pages/Products/Products';
>>>>>>> 84e8a09a0cdb3e4acf13d03be04835f260dbdbfe


function App() {

  
  return (
<<<<<<< HEAD
    <div className="row container mx-auto">
      
      <SmallCard statement="mohamed" pic={pic1} className="col-3" />
      <SmallCard statement="ahmed" pic={pic1} className="col-3" />
      <SmallCard statement="ewe" pic={pic1} className="col-3"/>
      <SmallCard statement="adas" pic={pic1} className="col-3" />

      <ProductCard  pic={pic1} />
     
=======
    <div className="App bg-light">
      <Home/>
      {/* <Home /> */}
      <Products />


      <h2>hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh</h2>
>>>>>>> 84e8a09a0cdb3e4acf13d03be04835f260dbdbfe
    </div>
  );
}

export default App;
