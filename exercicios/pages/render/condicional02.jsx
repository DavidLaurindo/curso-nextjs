import If from "../../components/if";


export default function condicional01(){
    const numero = 7
    return(
        <div>
           <If teste={numero % 2 === 0}>
               <h1>O número é par</h1>
           </If>
           <If teste={numero % 2 === 1}>
               <h1>O número é impar</h1>
           </If>
        </div>
    )
}