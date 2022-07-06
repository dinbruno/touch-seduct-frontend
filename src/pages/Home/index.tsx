import { CardComponent } from "../../components/CardComponent";
import { NeonComponent } from "../../components/NeonTxtComponent";
import { ThemeSwitcher } from "../../utils/ThemeSwitcher";
import { Faq } from "./Components/FrequentlyDoubts";
import { Header } from "./Components/Header";
import { SectionComponent } from "./Components/SectionComponent";
import { SelectProducts } from "./Components/SelectProducts";
import { Container } from "./styles";

export const Home: React.FC = () => {
  return (
    <Container>
      <Header />
      <SelectProducts />
      <Faq />
    </Container>
  );
};
