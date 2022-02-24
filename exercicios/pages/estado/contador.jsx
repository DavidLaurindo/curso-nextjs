import { useState } from "react"
import NumeroDisplay from "../../components/NumeroDisplay"

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
            <NumeroDisplay numero={contador} />
            <div>
                <button onClick={menos}>-</button>
                <button onClick={mais}>+</button>
            </div>
        </div>
    )
}