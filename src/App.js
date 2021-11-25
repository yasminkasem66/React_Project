import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home';
import Products from './Pages/Products/Products';
import Checkout from './Pages/Checkout/Checkout';
function App() {
  return (
    <div className="App bg-light">
      {/* <Home/> */}
      {/* <Home /> */}
      {/* <Products /> */}
      <Checkout/>
    </div>
  );
}

export default App;
