import styled from "styled-components";

export const Container = styled.div`
  background: #18191f;

  > div {
    box-shadow: 2px 2px 2px #00000080, 10px 1px 12px #00000080,
      2px 2px 10px #00000080, 2px 2px 3px #00000080,
      inset 2px 2px 10px #00000080, inset 2px 2px 10px #00000080,
      inset 2px 2px 10px #00000080, inset 2px 2px 10px #00000080;
    border-radius: 10px;
    padding: 4px;
    border-radius: 15px;
    animation: animate 3s linear infinite;
    box-shadow: 0 0 50px #0072ff, 0 0 200px #0072ff;
    display: flex;
    justify-content: center;
    align-items: center;

    @keyframes animate {
      from {
        filter: hue-rotate(0deg);
      }
      to {
        filter: hue-rotate(360deg);
      }
    }
  }

  > svg {
    animation-delay: 0.3s;
    z-index: 10;
  }
`;
