import { ThemeSwitcher } from "../../../../utils/ThemeSwitcher";
import { Sty } from "./header.styles";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import bdsm from "../../../../assets/png/bdsm.png";
import toys from "../../../../assets/png/toys.png";
import lingerie from "../../../../assets/png/lingerie.png";
import apiment from "../../../../assets/png/apime.png";
import { NeonButton } from "../../../../components/NeonButton/neonbutton";
import { Spin as Hamburger } from "hamburger-react";
import { useState } from "react";

export const Header: React.FC = () => {
  const [isOpen, setOpen] = useState(false);

  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      drag: true,
      slides: {
        perView: 1,
        spacing: 1,
      },
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 4000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <Sty.Container>
      <Sty.Carousel>
        <Sty.SlidersContainer>
          <div ref={sliderRef} className="keen-slider">
            <div className="keen-slider__slide number-slide1" id="slide1">
              <span> Apimente sua relação </span>
              <img src={apiment} alt="apiment"></img>
            </div>
            <div className="keen-slider__slide number-slide2" id="slide2">
              <span>Conheça nossas Lingeries</span>
              <img src={lingerie} alt="lingerie"></img>
            </div>
            <div className="keen-slider__slide number-slide3" id="slide3">
              <span>Que tal alguns brinquedinhos?</span>
              <img src={toys} alt="toys"></img>
            </div>
            <div className="keen-slider__slide number-slide4" id="slide4">
              <span>Você é um dominador(a) ou um submisso(a)</span>
              <img src={bdsm} alt="bdsm"></img>
            </div>
          </div>
        </Sty.SlidersContainer>
      </Sty.Carousel>

    
      <Sty.Contents>
        <Sty.Division>
          <Sty.Title>TOUCH SEDUCTION</Sty.Title>
        </Sty.Division>
        <Sty.Ul>
          <li>
            <a href="www.google.com" target="_blank">
              <NeonButton children="HOME" />
            </a>
          </li>
          <li>
            <NeonButton children="PRODUTOS" />
          </li>
          <li>
            <NeonButton children="CONTATO" />
          </li>
          <li>
            <ThemeSwitcher />
          </li>
        </Sty.Ul>
        <Sty.Menu>
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            color="#FB45D8"
            label="Show menu"
            easing="ease-in"
            size={24}
          />
        </Sty.Menu>
      </Sty.Contents>
      {isOpen && (
        <Sty.MenuContent>
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            color="#FB45D8"
            label="Show menu"
            easing="ease-in"
            size={24}
          />
        </Sty.MenuContent>
      )}
    </Sty.Container>
  );
};
