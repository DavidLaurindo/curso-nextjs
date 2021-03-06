import { useState } from "react"
import NumeroDisplay from "../../components/NumeroDisplay"
import { mega } from "../../functions/mega"

export default function megasena() {
    const [quant, setQuant] = useState(6)
    const [numeros, setNumeros] = useState([])

    function renderNumeros() {
        return numeros.map(numero => <NumeroDisplay key={numero} numero={numero} />)
    }

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        }}>
            <h1>Mega Sena</h1>
            <div style={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
            }}>
                {renderNumeros()}
            </div>
            <div>
                <input type="number" min={6} max={12} value={quant} onChange={ev => setQuant(ev.target.value)} />
                <button onClick={() => setNumeros(mega(quant))}>
                    Gerar Aposta
                </button>
            </div>
        </div>
    )
}