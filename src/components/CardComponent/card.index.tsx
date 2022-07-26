import { CARDMOCKS } from "./card.mocks";
import { Sty } from "./card.styles";
import image from "../../assets/png/plug.png";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useState } from "react";

export const CardComponent: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <Sty.ContainerAll>
      {CARDMOCKS.map((index, key) => {
        return (
          <Sty.Content key={key}>
            <Sty.SectionMock>
              <Sty.Card>
                <Sty.ImgBx className="imgbx">
                  <div ref={sliderRef} className="keen-slider">
                    <div
                      className="keen-slider__slide number-slide1"
                      id="slider"
                    >
                      <img src={image} alt="Plug" />
                    </div>
                    <div
                      className="keen-slider__slide number-slide1"
                      id="slider"
                    >
                      <img src={image} alt="Plug" />
                    </div>
                    <div
                      className="keen-slider__slide number-slide1"
                      id="slider"
                    >
                      <img src={image} alt="Plug" />
                    </div>
                  </div>

                  <h2>Plug Anal</h2>
                </Sty.ImgBx>
                <Sty.CardContents className="cardcontent">
                  <div className="sizes">
                    <h2>
                      Tamanhos:
                      <span>{index.sizes.M}</span>
                      <span>{index.sizes.G}</span>
                      <span>{index.sizes.GG}</span>
                    </h2>
                  </div>
                  <div className="colors">
                    <h2>
                      Cores:
                      <span>a</span>
                      <span>b</span>
                      <span>c</span>
                    </h2>
                  </div>
            
                </Sty.CardContents>
              </Sty.Card>
            </Sty.SectionMock>
          </Sty.Content>
        );
      })}
    </Sty.ContainerAll>
  );
};
