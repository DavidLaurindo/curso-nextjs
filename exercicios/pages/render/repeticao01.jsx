export default function repeticao01() {
    const listaAprovados = [
        'João',
        'Maria',
        'Ana',
        'Bia',
        'Carlos',
        'Daniel',
        'Laura',
    ]

    //Alternativa usando .maps
    function renderizarLista(){
        return listaAprovados.map((nome, i) => <li key={i}>{nome}</li>)//arrow
    }

    return (
        <ul>
            {renderizarLista()}
        </ul>
    )
}

/*
Uma alternativa usando for

function renderizarLista() {
        const itens = []
        
        for (let i = 0; i < listaAprovados.length; i++) {
            itens.push(<li key={i}>{listaAprovados[i]}</li>)
        }

        return itens
    }
*/ 