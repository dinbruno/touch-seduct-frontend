import { useState } from "react";
import { Sty } from ".";
import { CardComponent } from "../../../../components/CardComponent";
import { SectionComponent } from "../SectionComponent";

export const SelectProducts: React.FC = () => {
  const [selected, setSelected] = useState<number>(0);

  return (
    <Sty.ContainerFull>
      <Sty.SectionComponentContent>
          {/* Componente do painel brilhante */}
        <SectionComponent />
      </Sty.SectionComponentContent>

      <Sty.ContainerSelect>
        <Sty.Section>
          <Sty.Ul>
            <li onClick={() => setSelected(1)}>Lingeries</li>
            <li onClick={() => setSelected(2)}>BDSM</li>
            <li onClick={() => setSelected(3)}>Cosméticos</li>
            <li onClick={() => setSelected(4)}>Brinquedos</li>
          </Sty.Ul>
          <Sty.ImageContainer></Sty.ImageContainer>
        </Sty.Section>
      </Sty.ContainerSelect>
      
      <Sty.SelectProdutosContent>
        {/* Componente que contém os cards dos produtos */}
        <CardComponent />
      </Sty.SelectProdutosContent>
    </Sty.ContainerFull>
  );
};
