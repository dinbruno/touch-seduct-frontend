import styled from "styled-components";

export const Container = styled.div`
  .neon {
    cursor: pointer;
    font-size: 18px;
    font-weight: 800;
    text-decoration: none;
    border: none;
    display: inline-block;
    color: #f1b;
    padding: 10px 20px;
    border-bottom: #f1b 2px solid;
    border-radius: 10px;
    background-color: transparent;
    box-shadow: inset 0 0 12px 0 #f1b, 0 0 12px 0 #f1b;
    text-shadow: 0 0 8px hsl(0 0% 100% / 0.3), 0 0 32px currentColor;

    position: relative;
  }

  /* Reflexo do botão */
  .neon::before {
    content: "";
    position: absolute;
    top: 40px;
    left: 0;

    background: #f1b;

    width: 100%;
    height: 100%;

    transform: perspective(64px) rotateX(40deg) scale(1, 0.35);
    filter: blur(20px);
    opacity: 0.2;
    pointer-events: none;
  }

  /* Estilos para hover */
  .neon::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    box-shadow: 0 0 128px 2px #f1b;
    opacity: 0;
    background-color: #f1b;
    border-radius: 15px;

    z-index: -1;
    transition: opacity 100ms linear;
  }

  .neon:hover::before,
  .neon:hover::after {
    opacity: 1;
  }

  
  .neon:hover {
    
    color: white;
    text-shadow: none;
  }
`;
