import { useRouter } from "next/router"
import Link from "next/link"

export default function Params() {
    const router = useRouter()

    const nome = router.query.nome
    const id = router.query.id

    return (
        <div>
            <h1>Rotas Params {nome} e {id}</h1>
            <Link href="/rotas" passHref>
                <button>Voltar</button>
            </Link>
        </div>
    )
}