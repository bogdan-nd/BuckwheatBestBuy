import styled from "styled-components";
import {Image} from "react-bootstrap";
import ukraine_flag from "../images/ukaine_flag.png";

const UkraineFlagDiv = styled.div`
  position: fixed;
  width: 20px;
  height: 20px;
  left: 93.5%;
`;

const UkraineFlag = styled(Image)`
  object-fit: fill;
  width: 100%;
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

export default function UkraineRegion(){

    return(
        <div>
            <CountryName>Ukraine</CountryName>
                <UkraineFlagDiv>
                    <UkraineFlag src = {ukraine_flag}/>
                </UkraineFlagDiv>
        </div>
    )

}