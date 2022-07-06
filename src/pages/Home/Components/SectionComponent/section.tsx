import { Sty } from ".";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useTheme } from "../../../../hooks/useTheme";

export const SectionComponent: React.FC = () => {
  const { isDarkMode } = useTheme();

  return (
    <Sty.Container>
      <Sty.Controller>
        <Sty.ContainerSquare>
          <Sty.SquareText
            style={
              !isDarkMode
                ? { backgroundColor: "black" }
                : { backgroundColor: "transparent" }
            }
          >
            <Sty.NeonTxt>
              <span>CONHECA</span>
              <span>NOSSOS</span>
              <span>PRODUTOS</span>
            </Sty.NeonTxt>
          </Sty.SquareText>
        </Sty.ContainerSquare>
      </Sty.Controller>
    </Sty.Container>
  );
};
