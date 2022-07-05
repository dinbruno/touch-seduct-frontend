import { ThemeSwitcher } from "../../../../utils/ThemeSwitcher";
import { Sty } from "./header.styles";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
// import ImagePng from "../../../../assets/png/1-1920px.png";
// import ImagePng2 from "../../../../assets/png/2-1920px.png";
// import ImagePng3 from "../../../../assets/png/3-1920px.png";
// import ImagePng4 from "../../../../assets/png/4-1920px.png";
import { NeonButton } from "../../../../components/NeonButton/neonbutton";
import { Spin as Hamburger } from "hamburger-react";
import { useState } from "react";

export const Header: React.FC = () => {
  const [isOpen, setOpen] = useState(false);

  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      drag: false,
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
          }, 100);
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
      {/* <div ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide number-slide1" id="slide1"></div>
        <div className="keen-slider__slide number-slide2" id="slide2"></div>
        <div className="keen-slider__slide number-slide3" id="slide3"></div>
      </div> */}
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
