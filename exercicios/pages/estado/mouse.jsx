import { useState } from "react"

export default function mouse() {
    const [x, altX] = useState(0)

    const [y, altY] = useState(0)


    const estilo = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#222",
        color: "#fff",
        height: "100vh"
    }

    function mouseMovendo(e) {
        altX(e.clientX)
        altY(e.clientY)
    }

    return (
        <div style={estilo} onMouseMove={mouseMovendo}>
            <div>Eixo X: {x}</div>
            <div>Eixo Y: {y}</div>
        </div>
    )
}