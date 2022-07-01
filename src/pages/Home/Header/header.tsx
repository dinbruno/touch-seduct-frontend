import { ThemeSwitcher } from "../../../utils/ThemeSwitcher";
import { Sty } from "./header.styles";
import image1 from "../../../assets/png/1-1920px.png"


export const Header: React.FC = () => {
  return (
    <Sty.Container>
      <img src={image1.png}/>

      <ThemeSwitcher />
    </Sty.Container>
  );
};
