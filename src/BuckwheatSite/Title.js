import wheat_icon from "../images/wheat_icon.png";
import styled from "styled-components";
import {Image, Navbar} from "react-bootstrap";

const Title = styled(Navbar)`
  background: #FEF1AE;
  height: 69px;
`;

const WebsiteName = styled(Navbar.Brand)`
  position: absolute;
  width: 192px;
  height: 25px;
  left: 73px;
  top: 22px;

  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;
  color: #000000;
`;

const WheatImage = styled(Image)` 
  width: 44px;
  height: 42px;
  right: 975px;
  top: 13px;
  margin-top: 12px;
  margin-left: 20px;
`;

export default function WheatTitle() {
    return (
        <Title>
            <WebsiteName>Buckwheat Best Buy</WebsiteName>
            <WheatImage src = {wheat_icon}></WheatImage>
        </Title>
    )
}