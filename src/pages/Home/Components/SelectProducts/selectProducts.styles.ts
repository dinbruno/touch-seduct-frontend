import Bdsm from "../../../../assets/png/bdsm.png";
import styled from "styled-components";


const ContainerFull = styled.div`
  width: 100%;
  height: 100%;

`

const SectionComponentContent = styled.div`
  
`

const ContainerSelect = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Section = styled.div`
   width: 800px;
  height: 250px;
  margin: 0 auto;
  border-bottom: #f1b 1px solid;
  border-radius: 10px;
  /* background-color: ${({ theme }) => theme.theme.neonShader};
  box-shadow: inset 0 0 12px 0 #f1b, 0 0 52px 0 #f1b;
  text-shadow: 0 0 8px hsl(0 0% 100% / 0.3), 0 0 32px currentColor; */
  display: flex;
  z-index: 10;
`;

const Ul = styled.ul`
  display: flex;
  gap: 30px;
  justify-content: center;
  align-items: center;
  list-style-type: none;

  > li {
    border: 1px solid #f1b;
    padding: 40px;
    border-radius: 5px;
    font-size: 22px;
    transition: 0.2s ease-in-out;
  }
  li:nth-child(1) {
    :hover {
      padding: 60px;
      color: white;
      border: 1px solid white;
    }
  }
  li:nth-child(3) {
    :hover {
      padding: 60px;

      color: #84b2e5;
      border: 1px solid #84b2e5;
    }
  }
  li:nth-child(2) {
    :hover {
      padding: 60px;

      color: red;
      border: 1px solid red;
    }
  }
  li:nth-child(4) {
    :hover {
      padding: 60px;

      color: #00d28f;
      border: 1px solid #00d28f;
    }
  }
`;

const ImageContainer = styled.div`
  margin-top: 13rem;
`;

const SelectProdutosContent = styled.div``

export const Sty = {
  ContainerFull,
  ContainerSelect,
  Section,
  Ul,
  ImageContainer,
  SelectProdutosContent,
  SectionComponentContent
};
