import { useState } from "react"
import ContadorDisplay from "../../components/ContadorDisplay"

export default function contador() {
    const [contador, setContador] = useState(0)

    const mais = () => setContador((contador + 1))
    const menos = () => setContador((contador - 1))

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <h1>Contador</h1>
            <ContadorDisplay numero={contador} />
            <div>
                <button onClick={menos}>-</button>
                <button onClick={mais}>+</button>
            </div>
        </div>
    )
}