import Icon from "../../hooks/useIconGetter";
import { Container } from "./styles";

export const AnimatedIcon: React.FC = () => {
  return (
    <Container>
      <div>
        <Icon icon="instagram" svgProps={{fill:" #A14581"}} />
      </div>
    </Container>
  );
};
