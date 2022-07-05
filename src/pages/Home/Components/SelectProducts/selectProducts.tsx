import { useState } from "react"
import { Sty } from "."
import Bdsm from "../../../../assets/png/bdsm.png"
import { CardComponent } from "../../../../components/CardComponent"


export const SelectProducts: React.FC = () => {
    const [selected, setSelected] = useState<number>(0)

    return( 
    <Sty.Container>
        <Sty.Section>
            <Sty.Ul>
                <li onClick={() => setSelected(1)}>Lingeries</li>
                <li onClick={() => setSelected(2)}>BDSM</li>
                <li onClick={() => setSelected(3)}>Cosméticos</li>
                <li onClick={() => setSelected(4)}>Brinquedos</li>
            </Sty.Ul>
            <Sty.ImageContainer>
            {/* <CardComponent/> */}
            </Sty.ImageContainer>
        </Sty.Section>
    </Sty.Container>
    )
}