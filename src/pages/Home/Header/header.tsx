import { ThemeSwitcher } from "../../../utils/ThemeSwitcher";
import { Sty } from "./header.styles";

export const Header: React.FC = () => {
  return (
    <Sty.Container>
      <ThemeSwitcher />
    </Sty.Container>
  );
};
