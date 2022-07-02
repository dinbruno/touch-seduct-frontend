import styled from "styled-components";
import ImagePng from "../../../../assets/png/4-1920px.png";
import ImagePng2 from "../../../../assets/png/2-1920px.png";

const Container = styled.div`
  width: 100%;
  height: 400px;
  background-color: ${({ theme }) => theme.theme.shape};
  background-image: url(${ImagePng});
  background-size: cover;
  opacity: 0.8;

  @media (max-width: 500px) {
    background-image: url(${ImagePng2});
  }


`;

export const Sty = {
  Container,
};
