import Estilo from "../../components/Estilo";

export default function usandoEstilo(){
    return(
        <div>
            <Estilo numero={3} color="black"/>
            <Estilo numero={-13} color="white" direita/>
        </div>
    )
}