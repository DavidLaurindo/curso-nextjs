import Filho from "./Filho";

export default function Pai(props){
    return(
        <div>
            <h1>Família {props.familia}</h1>
            <Filho nome="André" familia={props.familia} />
            <Filho nome="Luana" familia={props.familia} />
            <Filho  {...props} nome="Gabriel" />
        </div>
    )
}