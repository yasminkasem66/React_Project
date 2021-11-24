import React from 'react';
import './App.css';
import Footer1 from './Component/Footer1/Footer1';
import JumiaInfo from './Component/Jumia-info/JumiaInfo';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer2 from './Component/Footer2/Footer2';


function App() {
  return (
    <div className="App">
      <Footer1 />
    <JumiaInfo/>
    <Footer2/>
    </div>
  );
}

export default App;
