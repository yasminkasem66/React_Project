import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home';


function App() {
  return (
    <div className="App bg-light">
      <Home/>
      {/* <Home /> */}
      <Products />
    </div>
  );
}

export default App;
