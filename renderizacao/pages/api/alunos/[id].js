export default function handler(req, res){
    const id = +req.query.id //convertendo o valor em inteiro(+)
    res.status(200).json({
        id: id,
        nome: `João Almeida ${id}`,
        email: `jojolala@gmail.com`
    })
}