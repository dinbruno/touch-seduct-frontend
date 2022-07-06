import styled from "styled-components";

const Container = styled.div`
  position: relative;
  height: 200px;
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;

const Controller = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ContainerSquare = styled.div`
  position: absolute;
  left: 5%;
  top: -40%;
`;

const SquareText = styled.div`
  box-shadow: 0 0 0.1vw 0.4vw #fff7f7, 0 0 0.4vw 0.6vw #e97272,
    0 0 4vw 0.4vw #e50b0b, inset 0 0 1.5vw 0.4vw #e50b0b,
    inset 0 0 0.4vw 0.2vw #e97272, inset 0 0 0.5vw 0.2vw #fff7f7;
  width: 450px;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NeonTxt = styled.div`
  flex-direction: column;
  letter-spacing: 6px;
  padding: 20px;

  text-align: center;
  text-shadow: 0.1vw 0vw 0.25vw #ffd8d8, 0.2vw 0vw 0.25vw #ffd8d8,
    0.4vw 0vw 0.25vw #ffd8d8, 0.1vw 0vw 0vw #f25757, 0.2vw 0vw 0vw #f25757,
    0.4vw 0vw 0vw #f25757, 0.1vw 0vw 0.1vw #f25757, 0.2vw 0vw 0.1vw #f25757,
    0.4vw 0vw 0.1vw #f25757, 0.1vw 0vw 2vw #f25757, 0.2vw 0vw 2vw #f25757,
    0.4vw 0vw 2vw #f25757, 0.1vw 0vw 1vw #e50b0b, 0.2vw 0vw 1vw #e50b0b,
    0.4vw 0vw 5vw #e50b0b, 0.1vw 0vw 5vw #e50b0b, 0.2vw 0vw 20vw #e50b0b,
    0.4vw 0vw 10vw #e50b0b, 0.1vw 0vw 10vw #e50b0b, 0.2vw 0vw 30vw #e50b0b,
    0.4vw 0vw 10vw #e50b0b;

  > span {
    display: block;
    padding: -10px 0;
    font-family: neon;
    font-size: 3rem;
    color: black !important;
  }

  > span:nth-child(3) {
    @keyframes on-off {
      0% {
        color: #333;
        text-shadow: none;
      }
      50% {
        color: #e50b0b;
        text-shadow: 0.1vw 0vw 0.25vw #ffd8d8, 0.2vw 0vw 0.25vw #ffd8d8,
          0.4vw 0vw 0.25vw #ffd8d8, 0.1vw 0vw 0vw #f25757, 0.2vw 0vw 0vw #f25757,
          0.4vw 0vw 0vw #f25757, 0.1vw 0vw 0.1vw #f25757,
          0.2vw 0vw 0.1vw #f25757, 0.4vw 0vw 0.1vw #f25757,
          0.1vw 0vw 2vw #f25757, 0.2vw 0vw 2vw #f25757, 0.4vw 0vw 2vw #f25757,
          0.1vw 0vw 1vw #e50b0b, 0.2vw 0vw 1vw #e50b0b, 0.4vw 0vw 5vw #e50b0b,
          0.1vw 0vw 5vw #e50b0b, 0.2vw 0vw 20vw #e50b0b, 0.4vw 0vw 10vw #e50b0b,
          0.1vw 0vw 10vw #e50b0b, 0.2vw 0vw 30vw #e50b0b, 0.4vw 0vw 10vw #e50b0b;
      }
      60% {
        color: #333;
        text-shadow: none;
      }
      61% {
        color: #e50b0b;
        text-shadow: 0.1vw 0vw 0.25vw #ffd8d8, 0.2vw 0vw 0.25vw #ffd8d8,
          0.4vw 0vw 0.25vw #ffd8d8, 0.1vw 0vw 0vw #f25757, 0.2vw 0vw 0vw #f25757,
          0.4vw 0vw 0vw #f25757, 0.1vw 0vw 0.1vw #f25757,
          0.2vw 0vw 0.1vw #f25757, 0.4vw 0vw 0.1vw #f25757,
          0.1vw 0vw 2vw #f25757, 0.2vw 0vw 2vw #f25757, 0.4vw 0vw 2vw #f25757,
          0.1vw 0vw 1vw #e50b0b, 0.2vw 0vw 1vw #e50b0b, 0.4vw 0vw 5vw #e50b0b,
          0.1vw 0vw 5vw #e50b0b, 0.2vw 0vw 20vw #e50b0b, 0.4vw 0vw 10vw #e50b0b,
          0.1vw 0vw 10vw #e50b0b, 0.2vw 0vw 30vw #e50b0b, 0.4vw 0vw 10vw #e50b0b;
      }
      65% {
        color: #333;
        text-shadow: none;
      }
      80% {
        color: #333;
        text-shadow: none;
      }
      100% {
        color: #e50b0b;
        text-shadow: 0.1vw 0vw 0.25vw #ffd8d8, 0.2vw 0vw 0.25vw #ffd8d8,
          0.4vw 0vw 0.25vw #ffd8d8, 0.1vw 0vw 0vw #f25757, 0.2vw 0vw 0vw #f25757,
          0.4vw 0vw 0vw #f25757, 0.1vw 0vw 0.1vw #f25757,
          0.2vw 0vw 0.1vw #f25757, 0.4vw 0vw 0.1vw #f25757,
          0.1vw 0vw 2vw #f25757, 0.2vw 0vw 2vw #f25757, 0.4vw 0vw 2vw #f25757,
          0.1vw 0vw 1vw #e50b0b, 0.2vw 0vw 1vw #e50b0b, 0.4vw 0vw 5vw #e50b0b,
          0.1vw 0vw 5vw #e50b0b, 0.2vw 0vw 20vw #e50b0b, 0.4vw 0vw 10vw #e50b0b,
          0.1vw 0vw 10vw #e50b0b, 0.2vw 0vw 30vw #e50b0b, 0.4vw 0vw 10vw #e50b0b;
      }
    }

    animation: on-off 7s infinite;
  }
`;

export const Sty = {
  Controller,
  Container,
  SquareText,
  NeonTxt,

  ContainerSquare,
};
