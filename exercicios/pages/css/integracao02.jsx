import styles from "./integracao2.module.css"
//em javascript e jsx não é preciso colocar a extensão.

export default function integracao2(){
    return(
        <div id={styles.integracao02}>
           <div className={styles.vermelha}>Texto 01</div> 
           <div className={styles.azul}>Texto 02</div>
           <div className={styles.branco}>Texto 03</div>
        </div>
    )
}