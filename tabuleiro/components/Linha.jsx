import style from '../styles/Linha.module.css'
import Subdivisao from "./subdivisao";

export default function Linha(props){
    return(
        <div className={style.linha}>
            <Subdivisao preta={props.preta}/>
            <Subdivisao preta={!props.preta}/>
            <Subdivisao preta={props.preta}/>
            <Subdivisao preta={!props.preta}/>
            <Subdivisao preta={props.preta}/>
            <Subdivisao preta={!props.preta}/>
            <Subdivisao preta={props.preta}/>
            <Subdivisao preta={!props.preta}/>
        </div>
    )
}