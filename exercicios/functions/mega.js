export function mega(quantidade = 6, numeros = []){
    let quant = +quantidade
    if(quant < 6 && quant > 60){
        throw "Quantidade inválida"
    }
    if(numeros.length === quant){
        return numeros.sort((n1, n2) => n1 - n2)
    }

    const numeroAleatorio = parseInt(Math.random() * 60) + 1
    if(!numeros.includes(numeroAleatorio)){
        return mega(quant, [...numeros, numeroAleatorio])
    }else{
        return mega(quant, numeros)
    }
}
