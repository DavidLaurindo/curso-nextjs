// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function qualquerNome(req, res) {
  res.status(200).json([
    { name: 'John Doe' },
    { name: 'Arlindo' },
    { nome: 'Pereira' },
    { nome: 'Emarclindes' },
  ])
}