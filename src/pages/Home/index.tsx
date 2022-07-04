import { CardComponent } from "../../components/CardComponent";
import { NeonComponent } from "../../components/NeonTxtComponent";
import { ThemeSwitcher } from "../../utils/ThemeSwitcher";
import { Header } from "./Components/Header";
import { Container } from "./styles";

export const Home: React.FC = () => {
  return (
    <Container>
         <Header/>
         <CardComponent/>
    </Container>
  );
};
