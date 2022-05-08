
import './App.css';
import React from 'react';
import styled from "styled-components"
import{MainRouter} from "./Router/MainRouter"
import{Navbar} from "./Router/Navbar"
import  Navbar1  from './Components/Signup/Navbar1';
import Example from "./Router/Nav"

function App() {
  return(
    <div className='App'>
      {/* <Example/> */}
      <Navbar/>
      <Navbar1/>
      <MainRouter/>
    </div>
  )
}

export default App;
