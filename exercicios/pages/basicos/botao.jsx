//Opção 01(função está fora do export)
function acao01() {
    console.log("acao01")
}

export default function botao() {
    //Opção 02(Função dentro de outra função)
    function acao02() {
        console.log("Ação 02")
    }

    //Opção 05(passando evento)
    function acao05(e) {
        console.log(e)
    }

    return (
        <div>
            <button onClick={acao01}>Click 01</button>
            <button onClick={acao02}>Click 02</button>

            <button onClick={function () {
                console.log("Ação 03")//Opção 03(chamando imediatamente)
            }}>Click 03</button>

            <button onClick={() => console.log("Ação 04")}>
                Click 04
            </button>

            <button onClick={acao05}>
                Click 05
            </button>

            <button onClick={e => acao05(e.altKey)}>
                Click 05 v2
            </button>

            <div>
                <input type="text" onChange={e => console.log(e.target.value)} />
            </div>
        </div>
    )
}