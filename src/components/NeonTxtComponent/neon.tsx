import { Sty } from "."

interface NeonProps {
    children: string;
}

export const NeonComponent = ({children}: NeonProps) => {
    return (
        <Sty.Section>
            <div>
                <h1>{children}</h1>
            </div>
        </Sty.Section>
    )
}