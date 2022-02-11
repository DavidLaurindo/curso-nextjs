import Item from "../../components/Item";
import Lista from "../../components/Lista";

export default function usandoFilho(){
    return(
        <div>
            <Lista>
                <Item conteudo="Item 10"/>
                <Item conteudo="Item 11"/>
                <Item conteudo="Item 12"/>
                <Item conteudo="Item 12"/>
                <Item conteudo="Item 12"/>
                <Item conteudo="Item 12"/>
            </Lista>
        </div>
    )
}