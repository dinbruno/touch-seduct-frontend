import { CARDMOCKS } from "./card.mocks";
import { Sty } from "./card.styles";
import image from "../../assets/png/plug.png";

export const CardComponent: React.FC = () => {



  
  return (
    <Sty.ContainerAll>
      {CARDMOCKS.map((index, key) => {
        return (
          <Sty.Content key={key}>
            <Sty.SectionMock>
                <Sty.Card>
                  <Sty.ImgBx className="imgbx">
                    <img src={image} />
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
                        <span></span>
                        <span></span>
                        <span></span>
                      </h2>
                    </div>
                    <Sty.Button></Sty.Button>
                  </Sty.CardContents>
                </Sty.Card>
            </Sty.SectionMock>
          </Sty.Content>
        );
      })}
    </Sty.ContainerAll>
  );
};
