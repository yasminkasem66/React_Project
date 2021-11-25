import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home/Home";
import Products from "./Pages/Products/Products";
import SingleProduct from './Pages/SingleProduct/SingleProduct';

function App() {

  
  return (
    <div className="App bg-light">
      <Home />
      

      {/* <Products /> */}


      
      <SingleProduct/>
      


      
    </div>
  );
}

export default App;
