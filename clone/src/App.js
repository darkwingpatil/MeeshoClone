
import './App.css';
import React from 'react';
import styled from "styled-components"
import{MainRouter} from "./Router/MainRouter"
import{Navbar} from "./Router/Navbar"

function App() {
  return(
    <div className='App'>
      <Navbar/>
      <MainRouter/>
    </div>
  )
}

export default App;
