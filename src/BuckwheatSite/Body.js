import React from "react";
import styled from "styled-components";
import {Image, Navbar, Button, Container} from "react-bootstrap";
import buckwheat_image from "../images/cutted_buckwheat.jpg";
import Hryvnia from "./Hryvnia";

const BuckwheatImage = styled(Image)`
  position: relative;
  width: 100%;
  height: 585px;
  object-fit: cover;
  z-index: 0;
`;

const ItemsDiv = styled.div`
  position: absolute;
  left: 25%;
  top: 130px;
  width: 50%;
  max-height: 470px;
  z-index: 1;
  overflow: auto;
  ::-webkit-scrollbar{
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }
  ::-webkit-scrollbar-thumb {
    background-color: #E8E9DB;
    outline: 2px solid #B6BF48;
  }
`;

const WheatItem = styled.div`
  position: relative;
  background: #E7CA9F;
  opacity: 0.93;
  width: 98%;
  left: 1%;
  height: 70px;
  margin-top: 1px;
  margin-bottom: 29px;
  
  outline: 1px solid #9F6632;  
`

const WheatName = styled.div`
  position: relative;
  width: 100%;
  height: 30px;
  top: 7px;
  text-align: center;
  
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 23px;
`

const WheatPrice = styled.div`
  position: absolute;
  width: 120px;
  height: 22px;
  left: 3%;
  top: 35px;
  text-align: center;
  
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 17px;
  line-height: 23px;
`

const WheatLink = styled.a`
  position: absolute;
  width: 58px;
  height: 22px;
  right: 5%;
  top: 35px;
  
  color: black;
  text-align: center;
  font-family: Roboto;
  font-style: italic;
  font-weight: 300;
  font-size: 17px;
  line-height: 23px;
`

function Body({buckwheatList}){
    return (
        <div>
        <BuckwheatImage src={buckwheat_image}/>
        <ItemsDiv>
            {buckwheatList.map(buckwheat => {
                return(
                <WheatItem>
                    <WheatName>{buckwheat['Name']}</WheatName>
                    <WheatPrice>{buckwheat['Price'] + " UAH"}</WheatPrice>
                    <WheatLink href = {buckwheat['Link']}>Link</WheatLink>
                </WheatItem>
                )}
            )}
        </ItemsDiv>
        </div>
    )
}

export default Body;