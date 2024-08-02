import React from 'react'
import ReactDOM from 'react-dom/client'
import Main from "./components/Main.js"
import Navbar from "./components/Navbar/Navbar.js"

import { Fade } from "react-awesome-reveal";


import './App.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
function App() {
  return (
    <div className="App">
      
      <Navbar />
      <Main />
    
    </div>
  );
}

export default App;
