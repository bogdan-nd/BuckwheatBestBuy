import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {Button, Image, Nav, Navbar} from "react-bootstrap";
import wheat_icon from "./images/wheat_icon.png";
import WheatTitle from "./BuckwheatSite/Title";
import Body from "./BuckwheatSite/Body";
import BottomLine from "./BuckwheatSite/Bottom";
import sorted_array from "./BuckwheatSite/BuckwheatParse"


const s_array =  sorted_array();


function App() {
  
  const [horses, setHorses] = useState([]);
  const fetchHorses = () => {
    sorted_array().then(response => {
        setHorses(response)
    });
  };
  
  
  useEffect(() => {
    fetchHorses();
  }, []);
 

  return (
    <div>
      <WheatTitle/>
      <Body buckwheatList={horses}/>
      <BottomLine/>
    </div>
  );
}

export default App;
