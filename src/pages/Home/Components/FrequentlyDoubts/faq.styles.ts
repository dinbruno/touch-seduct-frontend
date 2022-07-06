import styled from "styled-components";

const Container = styled.div`
  background-color: ${({ theme }) => theme.theme.faq};
  width: 100%;
  height: 600px;
`;

const AcordeonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 60px 0;

`;
const Content = styled.div`


`;

const ContainerQuestions = styled.div`
  border-radius: 10px;
  max-width: 750px;
  padding-top: 10px;
  height: 38vh;
  #title {
    margin-bottom: 50px;
    margin-left: 2rem;
    font-size: 28px;
    color: white;
    font-weight: 600;
  }

  @media (max-width: 900px) {
    max-width: 850px;
    margin-bottom: 60px;
  }
`;

const Warp = styled.div`
  cursor: pointer;
  padding-top: 19px;
  padding-bottom: 17px;
  margin-left: 2rem;
  margin-right: 1.5rem;
  border-bottom: 1px solid white;
  display: flex;
  justify-content: space-between;
  align-items: left;
  font: normal normal normal 16px/20px Raleway;
  letter-spacing: 0px;
  opacity: 1;
  h1 {
    font: normal normal normal 20px Raleway;
    letter-spacing: 0px;
    opacity: 1;
  }

  @media (max-width: 1920px) {
    width: 700px;
  }

  @media (max-width: 1366px) {
    width: 600px;
  }
  @media (max-width: 1100px) {
    width: 500px;
  }
  @media (max-width: 1000px) {
    width: 450px;
  }
  @media (max-width: 900px) {
    width: 730px;
  }
  @media (max-width: 800px) {
    width: 600px;
  }
  @media (max-width: 650px) {
    width: 500px;
  }
  @media (max-width: 560px) {
    width: 400px;
  }
  @media (max-width: 475px) {
    width: 300px;
  }
  @media (max-width: 375px) {
    width: 90%;
    margin-left: 1rem;
  }
`;

const Dropdown = styled.div`
  transition-delay: 3s;
  margin-top: 20px;
  font: normal normal normal 15px/20px Raleway;
  letter-spacing: 0px;
  opacity: 1;
  align-items: left;
  margin-bottom: 1rem;
  margin-left: 2rem;
  margin-right: 1.5rem;
  color: white;

  @media (max-width: 1920px) {
    width: 700px;
  }

  @media (max-width: 1366px) {
    width: 600px;
  }
  @media (max-width: 1100px) {
    width: 500px;
  }
  @media (max-width: 1000px) {
    width: 450px;
  }
  @media (max-width: 900px) {
    width: 730px;
  }
  @media (max-width: 800px) {
    width: 600px;
  }
  @media (max-width: 650px) {
    width: 400px;
  }
  @media (max-width: 475px) {
    width: 300px;
  }
  @media (max-width: 375px) {
    width: 270px;
    margin-left: 1rem;
  }

  p {
    word-break: break-word;
    color: white;
    text-align: justify;
    margin-right: 10px;
    font-weight: bold;
  }
`;
const ImageCellPhone = styled.div`

  display: flex;
  gap: 20px;
  align-items: center;


  > div {
    h1,h2 {
      color: white;
      align-items: center;
      justify-content: center;
      text-align: initial;
    };

    .icon {
      display: flex;
      justify-content: initial;
      padding: 20px 0px;
    }
  }

 
    > a > img {
    background-color: transparent;
    animation: fly 8s ease-in-out infinite;
    width: 200px;
    box-shadow: 5px 27px 26px -30px black;
    border: none;

    @keyframes fly {
      0%,
      100% {
        transform: translateY(0px);
      }
      50% {
        transform: translateY(-10px);
      }
    }
  }
`;

export const Sty = {
  Container,
  AcordeonContainer,
  Content,
  ContainerQuestions,
  Warp,
  Dropdown,
  ImageCellPhone,
};
