import Bdsm from "../../../../assets/png/bdsm.png";
import styled from "styled-components";

const Container = styled.div`
  width: calc(100% - 15rem);
  height: 250px;
  margin: 0 auto;
  margin-top: -10rem;
  border-bottom: #f1b 1px solid;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.theme.neonShader};
  box-shadow: inset 0 0 12px 0 #f1b, 0 0 52px 0 #f1b;
  text-shadow: 0 0 8px hsl(0 0% 100% / 0.3), 0 0 32px currentColor;
  display: flex;
  /* background-image: url(${Bdsm}); */
  background-size: cover;
  z-index: 10;
`;

const Section = styled.div`
  width: calc(100% - 2rem);
  height: 180px;
  background-color: transparent;
  margin: 0 auto;
  margin-top: -50px;
  border-radius: 15px;
`;

const Ul = styled.ul`
  display: flex;
  gap: 30px;
  justify-content: initial;
  align-items: center;
  list-style-type: none;
  
  > li {
    border: 1px solid #f1b;
    padding: 40px;
    border-radius: 5px;
    font-size: 22px;
  }
  li:nth-child(1) {
    :hover {
      color: white;
      border: 1px solid white;

  
    }
  }
  li:nth-child(3) {
    :hover {
      color: #84b2e5;
      border: 1px solid #84b2e5;
    }
  }
  li:nth-child(2) {
    :hover {
      color: red;
      border: 1px solid red;
    }
  }
  li:nth-child(4) {
    :hover {
      color: #00D28F;
      border: 1px solid #00D28F;
    }
  }
`;

const ImageContainer = styled.div`
  margin-top: 13rem;
`

export const Sty = {
  Container,
  Section,
  Ul,
  ImageContainer
};
