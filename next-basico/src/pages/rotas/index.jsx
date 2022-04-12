import Link from "next/link"
import router, { useRouter } from "next/router"

export default function rotas() {

    function navegacaoParams(){
        router.push({
            pathname: "/rotas/params",
            query: {
                nome: 'Ana Silva',
                id: 123
            }
        })
    }

    return (
        <div>
            <h1>Rotas Index</h1>
            <ul>
                <Link href="/rotas/params?nome=Lucius&id=86586">
                    <li>Params</li>
                </Link>
                <Link href="/rotas/123/buscar">
                    <li>Buscar</li>
                </Link>
                <Link href="/rotas/123/daniel">
                    <li>Daniel</li>
                </Link>
            </ul>
            <div style={{display: "flex", flexDirection: "column", alignItems: "flex-start"}}>

                    <button onClick={() => router.push("/rotas/123/buscar")}>Buscar</button>

                    <button onClick={() => router.push("/rotas/123/daniel")}>Daniel</button>

                    <button onClick={navegacaoParams}>Params</button>

            </div>
        </div>
    )
}