import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import SmallCard from './Component/SmallCard/SmallCard';
import pic1 from './assets/imgs/padge1.png'
import ProductCard from './Component/ProductCard/ProductCard';



function App() {

  
  return (
    <div className="row container mx-auto">
      
      <SmallCard statement="mohamed" pic={pic1} className="col-3" />
      <SmallCard statement="ahmed" pic={pic1} className="col-3" />
      <SmallCard statement="ewe" pic={pic1} className="col-3"/>
      <SmallCard statement="adas" pic={pic1} className="col-3" />

      <ProductCard  pic={pic1} />
     
    </div>
  );
}

export default App;
