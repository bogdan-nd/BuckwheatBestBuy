import wheat_icon from "../images/wheat_icon.png";
import styled from "styled-components";
import {Image, Navbar} from "react-bootstrap";
import ukraine_flag from "../images/ukaine_flag.png";

const Bottom = styled(Navbar)`
  position: relative;
  background: #FFF6E0;
  height: 62px;
  display: flex;
  align-items: center;
`;

const CopyrightText = styled(Navbar.Brand)`
  width: 387px;
  height: 23px;
  padding-left: 30px;

  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 23px;
`;

const CountryName = styled.div`
  position: fixed;
  width: 62px;
  height: 25px;
  left: 95%;

  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;
`;

const UkraineFlagDiv = styled.div`
  position: fixed;
  width: 20px;
  height: 20px;
  left: 93.5%;
`;

const UkraineFlag = styled(Image)`
  object-fit: fill;
  width: 70%;
`;


export default function BottomLine(){
    return(
        <Bottom>
            <CopyrightText>Copyright © 2021 Carambol Team</CopyrightText>
            <CountryName>Ukraine</CountryName>
            <UkraineFlagDiv>
                <UkraineFlag src = {ukraine_flag}/>
            </UkraineFlagDiv>
        </Bottom>
    )
}