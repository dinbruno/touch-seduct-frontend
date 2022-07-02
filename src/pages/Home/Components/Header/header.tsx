import { ThemeSwitcher } from "../../../../utils/ThemeSwitcher";
import { Sty } from "./header.styles";


export const Header: React.FC = () => {
  return (
    <Sty.Container>
      {/* <img src={ImagePng} alt="Logo"/> */}

      <ThemeSwitcher />
    </Sty.Container>
  );
};
