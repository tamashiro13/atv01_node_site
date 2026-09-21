import express from "express";
const rota = express.Router();

// ROTA JOGADORES
rota.get("/jogadores", function (req, res) {
  const jogadores = [
    {
      nome: "Hugo Souza",
      posicao: "GK",
      altura: "199cm",
      idade: "27 anos",
      foto: "imgs/hugo.webp",
    },
    {
      nome: "Matheuzinho",
      posicao: "DR",
      altura: "171cm",
      idade: "26 anos",
      foto: "imgs/matheuzinho.webp",
    },
    {
      nome: "Matheus Bidu",
      posicao: "DL",
      altura: "172cm",
      idade: "27 anos",
      foto: "imgs/bidu.webp",
    },
    {
      nome: "Gustavo Henrique",
      posicao: "DC",
      altura: "195cm",
      idade: "33 anos",
      foto: "imgs/gh.webp",
    },
    {
      nome: "Gabriel Paulista",
      posicao: "DC",
      altura: "187cm",
      idade: "35 anos",
      foto: "imgs/gp.webp",
    },
    {
      nome: "Rodrigo Garro",
      posicao: "AM",
      altura: "174cm",
      idade: "28 anos",
      foto: "imgs/rg.webp",
    },
    {
      nome: "André Carrillo",
      posicao: "MC",
      altura: "180cm",
      idade: "35 anos",
      foto: "imgs/ac.webp",
    },
    {
      nome: "Breno Bidon",
      posicao: "MC",
      altura: "179cm",
      idade: "21 anos",
      foto: "imgs/bb.webp",
    },
    {
      nome: "Raniele",
      posicao: "DM",
      altura: "184cm",
      idade: "29 anos",
      foto: "imgs/raniele.webp",
    },
    {
      nome: "Memphis Depay",
      posicao: "ST",
      altura: "176cm",
      idade: "32 anos",
      foto: "imgs/md.webp",
    },
    {
      nome: "Yuri Alberto",
      posicao: "ST",
      altura: "183cm",
      idade: "25 anos",
      foto: "imgs/ya.webp",
    },

  ];
  res.render("jogadores", {
    jogadores: jogadores,
  });
});

export default rota;