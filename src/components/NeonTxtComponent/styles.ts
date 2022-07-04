import styled from "styled-components";

const Section = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  :before {
    background-color: ${({theme}) => theme.colors.primary};
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    mix-blend-mode: color;
    animation: animate 10s linear infinite;

    @keyframes animate {
      0% {
        filter: hue-rotate(0deg);
      }
      100% {
        filter: hue-rotate(30deg);
      }
    }
  }

  > h1 {
    position: relative;
    margin: 0;
    width: 100%;
    text-align: center;
    text-transform: uppercase;
    font-size: 200px;
    filter: blur(1px);
    text-shadow: 0 0 10px rgba(255, 255, 255, 1),
      0 0 20px rgba(255, 255, 255, 1), 0 0 40px rgba(255, 255, 255, 1),
      0 0 80px rgba(255, 255, 255, 1), 0 0 160px rgba(255, 255, 255, 1);
  }
`;

export const Sty = {
  Section,
};
