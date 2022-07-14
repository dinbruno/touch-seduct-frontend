import { useState } from "react";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import { QUESTIONS } from "./Data";
import { Sty } from "./faq.styles";
import CellPhone from "../../../../assets/png/cellphone.png";
import { AnimatedIcon } from "../../../../components/AnimatedNeonIcon";

type HandleChangeSelectProps = {
  index: number;
  fn: (index: any) => void;
};

export const Faq: React.FC = () => {
  const [studentSelected, setStudentSelected] = useState<number | null>(null);

  const handleChangeSelect = ({ index, fn }: HandleChangeSelectProps) => {
    fn((prev: any) => {
      if (prev === index) {
        return null;
      }
      return index;
    });
  };

  return (
    <Sty.Container>
      <Sty.AcordeonContainer>
        <Sty.ContainerQuestions>
          <span id="title">Perguntas frequentes</span>

          {QUESTIONS.map((item: any, index: any) => {
            return (
              <Sty.Content key={index}>
                <Sty.Warp
                  onClick={() =>
                    handleChangeSelect({ fn: setStudentSelected, index })
                  }
                  key={index}
                >
                  <h1>{item.question}</h1>
                  <span>
                    {studentSelected === index ? (
                      <FiChevronDown />
                    ) : (
                      <FiChevronRight />
                    )}
                  </span>
                </Sty.Warp>
                {studentSelected === index ? (
                  <Sty.Dropdown>
                    <p>{item.answer}</p>
                  </Sty.Dropdown>
                ) : null}
              </Sty.Content>
            );
          })}
        </Sty.ContainerQuestions>
        <Sty.ImageCellPhone>
          <a
            href="https://www.instagram.com/touch.seduction/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img src={CellPhone} alt="cellphone" />
          </a>
          <div>
            <h1>Fique de olho em todas as nossas novidades</h1>
            <h2>Nos siga no Instagram.</h2>
            <div className="icon">
              <a
                href="https://www.instagram.com/touch.seduction/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <AnimatedIcon icon="instagram" />
              </a>
            </div>
          </div>
        </Sty.ImageCellPhone>
      </Sty.AcordeonContainer>
    </Sty.Container>
  );
};
