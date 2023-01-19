import React from 'react';
import Home from './component/Home'
import Work from './component/Work'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import './App.scss';




function App() {
 

  return (
    
    
    <div className="App" >
      
      <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/works" element={<Work/>}/>
      </Routes>
    
      
      
      

    </div>
    
    
  );
}

export default App;
