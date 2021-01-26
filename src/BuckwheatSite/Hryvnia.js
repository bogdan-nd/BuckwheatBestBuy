import styled from "styled-components";
import {Image} from "react-bootstrap";
import hryvnia_image from "../images/hryvnia.png";

const HryvniaDiv = styled.div`
  position: absolute;
  width: 3%;
  height: 15px;
  left: 25%;
  top: 37px;
`

const HryvniaImage = styled(Image)`
  object-fit: fill;
  width: 70%;
`;

export default function Hryvnia(){
    return(
        <HryvniaDiv>
            <HryvniaImage src={hryvnia_image}/>
        </HryvniaDiv>
    )

}