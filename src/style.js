import styled from 'styled-components';
import {Navbar} from 'reactstrap';
import { Button } from "reactstrap";
import { Modal, ModalBody, ModalFooter } from 'reactstrap';

// Nav Styles
export const Wrapper = styled.div`
  width: 100%;
`;
    
export const MainNav = styled(Navbar)`    
  color: #FF6D37;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-items: center;
  padding: 0;
  width: 100%;
`;

// About Us Styles
export const StyledH2 = styled.h2`
  text-align: center;
`

// Data Page Styles
export const StyledButton = styled(Button)`
  color: black;
  background-color: #FFC72C;
  width: 150px;
  height: 38px;
  margin-top: 3%;
   &:hover{
    background-color: #deaf2f;
  }
`

// Landing Page Styles
export const WaitText = styled.h3`
  color: white;
  font-size: 1.2rem;
  text-align: center;
`;

export const Header = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:center;
  text-align:center;
  max-width: 500px;
  height: auto;
  right:176px;
  top: 157px;
  margin:auto;
  margin-top: 50px;
`

export const Bracket = styled.div`
  width: 147px;
  height: 300px;
  border-left: 15px solid white;
  border-top: 15px solid white;
  border-bottom: 15px solid white;
`

export const Bracket2 = styled.div`
  width: 147px;
  height: 300px;
  border-right: 15px solid white;
  border-top: 15px solid white;
  border-bottom: 15px solid white;
`

export const Div2 = styled.div`
  display: flex;
  min-width: 398px;
  height: 500px;
  margin:  10% 5% 25%;
`

export const Div3 = styled.div`
  display: flex;
  flex-direction: reverse;
  min-width: 500px;
  height: 500px;
  left: 160px;
  top: 1083px;
  margin: 15% 5% 15%;
`

export const Border = styled.div`
  border: 15px solid white;
  margin-left: -65%;
  margin-top: 10%;
  width: 446px;
  height: 398px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`

export const Border2 = styled.div`
  border: 15px solid white;
  margin-top: 10%;
  margin-left: -45%;
  width: 446px;
  height: 398px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`

export const Spacer = styled.div`
  width: 44.5%;
`

export const Head1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 400px;
`

export const StyledH1 = styled.h1`
  text-transform: uppercase;
  text-align: center;
`

export const StyledSection = styled.section`
  width: 892px
`

export const StyledImg = styled.img`
  height : 446px,
  width: 398px
`
// Modal Styles
export const Wrapper1 = styled.div`
  width: 100%;
`

export const StyledModal = styled(Modal)`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const StyledModalBody = styled(ModalBody)`
  color: black;
  text-align:center;
  display: flex;
  flex-direction: column;
  padding: 10px;
`

export const ImageTextWrapper = styled.div`
  display: flex; 
  background: #636667;
  border-radius: 15px;
`

export const ModalImg = styled.img`
  margin: 0 auto;
  width: 48%;
  border: none;
  display: block;
  padding: 15px 15px;
  border-radius: 15px;
`

export const StyledModalFooter = styled(ModalFooter)`
  background: #636667;
  border-radius: 15px;
  border: none;
`

export const StyledH10 = styled.h1`
  font-size: 40px;
  color: #EFD19F;
  margin-top: 10%;
`

export const StyledHr = styled.hr`
  border-top: 5px solid rgba(253, 90, 30, 0.95);
  width: 200px;
  margin-top: 0;
`

export const StyledH20 = styled.h2`
  font-size: 32px;
  color: #EFD19F;
`

export const StyledLink = styled.a`
  color: rgba(253, 90, 30, 0.95);

  &:hover {
    color: #EFD19F;
    text-decoration: none;
  }
`

export const StyledP = styled.p`
  margin: 0 6% 0 2%;
`
// Right Side Component Styles
export const MetricFoot = styled.div`
  display: flex;
  flex-direction: row;
  height: 20px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  border: 1px solid red;
  fonst-size: .5rem;
`

export const ScoreCard = styled.div`
  display: flex;
  flex-direction: column;
  height: 10rem;
  width: 10rem;
  align-items: center;
  border: 1px solid white;
  margin: 2%;`

export const Footer = styled.div `
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 2.6rem;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 1%;
  margin-bottom: 1%
`
export const CardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const ProfileCard = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  img {
    height: 20vh;
    width: 10vw;
  }
  div {
    display: flex;
    flex-direction: row;
  }
  width: 25%;
       `;