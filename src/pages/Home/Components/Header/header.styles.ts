import styled, { keyframes } from "styled-components";
import ImagePng from "../../../../assets/png/1-1920px.png";
import ImagePng2 from "../../../../assets/png/2-1920px.png";
import ImagePng3 from "../../../../assets/png/3-1920px.png";
import ImagePng4 from "../../../../assets/png/sexyshop.jpg";

const Container = styled.div`
  width: 100%;
  height: 700px;
  background-color: ${({ theme }) => theme.theme.shape};
  background-image: url(${ImagePng4});
  background-size: cover;
  /* .keen-slider {
    height: 600px;
    z-index: 1;
    position: relative;
  }
  #slide1 {
    position: relative;
    background-image: url(${ImagePng2});
  }
  #slide2 {
    background-image: url(${ImagePng3});
  }
  #slide3 {
    background-image: url(${ImagePng4});
  } */
`;
const Contents = styled.div`
  z-index: 10;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  top: 10%;
  width: 90%;
  height: 100px;
  margin: 0 auto;
  background-color: rgba(198, 103, 229, 0.35);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  display: flex;
  justify-content: flex-end;
  padding-right: 60px;
  align-items: center;
  display: flex;
`;

const Ul = styled.ul`
  display: flex;
  gap: 40px;
  list-style-type: none;

  li {
    font-size: 20px;
  }

  li:nth-child(4) {
    width: 20px;
  }
`;

const Division = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
`;

const Animation = keyframes`

    0%,18%,20%,50.1%,60%,65.1%,80%,90.1%, 92% {
      color: #f1b;
      text-shadow: black;

    }
    18.1%, 20.1%, 30%, 50%, 60.1%, 70.1%, 75.1%, 80%, 90%, 92.1%, 100% {
      color: #FF47DA;
      filter: blur(1px);
      text-shadow: 0px 0px 10px #f1b, 
      0 0 50px  #f1b,
      0 0 80px  #f1b,
      0 0 120px  #f1b,
      0 0 200px  #f1b,
      ;
    }
  
  `;

const Title = styled.h1`
  margin-bottom: 20px;
  font-family: arial;
  position: relative;
  font-size: 3.5rem;
  letter-spacing: 0px;
  color: #f1b;
  text-align: center;
  -webkit-box-reflect: below 15px linear-gradient(transparent, #f1b);
  line-height: 2rem;
  outline: none;
  animation: ${Animation} 10s linear infinite;

`;

export const Sty = {
  Container,
  Contents,
  Ul,
  Division,
  Title,
};
