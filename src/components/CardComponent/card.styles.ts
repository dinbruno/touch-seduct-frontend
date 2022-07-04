import styled from "styled-components";

const ContainerAll = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr ;
`;

const Content = styled.div`
  display: flex;
`;

const SectionMock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* min-height: 100vh; */
  /* background-color: ${({ theme }) => theme.colors.secondaryDark}; */
  overflow: hidden;
  padding: 40px 20px;
  box-sizing: border-box;
`;

const Container = styled.div`
  /* border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  position: relative;
  width: 300px;
  height: 400px;
  margin: 20px 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color:${({ theme }) => theme.colors.primary};
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(55px); */
`;
const Card = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  position: relative;
  width: 300px;
  height: 400px;
  margin: 20px 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(55px);
  flex-direction: column;

  :hover {
     
      visibility: visible;
      opacity: 1;
      transition: 0.6s ease-in-out;
      transform: translateY(20px);
    
  }
`;

const CardContents = styled.div`
  position: absolute;
  bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transition: 0, 5 ease-in-out;
  opacity: 0;
  visibility: hidden;


  .sizes {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 20px;
    > h2 {
      font-weight: 300;
      font-size: 14px;
      text-transform: uppercase;
      letter-spacing: 2px;
      margin-right: 10px;

      > span {
        width: 25px;
        height: 25px;
        text-align: center;
        line-height: 24px;
        display: inline-block;
        color: blue;
        background-color: white;
        margin: 0 5px;
        font-size: 14px;
        font-weight: 500;
        transition: 0.5 ease-in-out;
        cursor: pointer;

        &:hover {
          background-color: green;
        }
      }
    }
  }

  .colors {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 20px;

    > h2 {
      > span {
        width: 50px;
        height: 20px;
        background-color: red;
        margin: 0 5px;
        border: 2px solid white;
        box-sizing: border-box;
        cursor: pointer;
      }
      > span:nth-child(2) {
        background-color: green;
      }
      > span:nth-child(3) {
        background-color: yellow;
      }
    }
  }
`;

const ImgBx = styled.div`
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 100%;
  padding: 10px;
  transition: 0.5s ease-in-out;

  > h2 {
    color: white;
    font-weight: 600;
  }

  :hover {
    transform: translateY(-100px);

    > img {
      transform: translate(10px, -60px) rotate(-25deg) scale(1.4);
    }
  }

  > img {
    background-color: transparent;
    max-width: 200px;
    max-height: 200px;
    margin: 0 0 20px;
    transition: 0.5s ease-in-out;
  }
`;

const Button = styled.button`
  position: relative;
  top: 10px;
  display: inline-block;
  padding: 12px 30px;
  background-color: white;
  border-radius: 40px;
  font-weight: 600;
  letter-spacing: 1px;
  color: purple;
  text-decoration: none;
  text-transform: uppercase;
`;

export const Sty = {
  ContainerAll,
  SectionMock,
  Container,
  Card,
  ImgBx,
  Content,
  CardContents,
  Button,
};
