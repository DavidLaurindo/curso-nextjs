import { useState } from "react"

export default function questao() {
    const [questao, setQuestao] = useState(null)

    fetch('http://localhost:3000/api/questao/123').then(resp => resp.json()).then(json => console.log(json))
    return (
        <div>
            <h1>Questão</h1>
        </div>
    )
}