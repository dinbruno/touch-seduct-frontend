import Icon from "../../hooks/useIconGetter";
import { Container } from "./styles";

interface AnimatedIconProps {
  icon: string;
}

export const AnimatedIcon = ({icon}: AnimatedIconProps) => {
  return (
    <Container>
      <div>
        <Icon icon={icon} svgProps={{fill:" #A14581"}} />
      </div>
    </Container>
  );
};
