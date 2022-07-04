import { Container } from "./styles"

interface NeonButtonProps {
    children: string;
}

export const NeonButton = ({children}: NeonButtonProps) => {
    return (
        <Container>
            <button className="neon">{children}</button>
        </Container>
    )
}