import express from "express";
const rota = express.Router();

// ROTA TITULOS
rota.get("/titulos", function (req, res) {
  const titulos = [
    { nome: "Brasilerão Betano", temporada: "16/17", foto:"imgs/brasileirao.webp"},
    { nome: "Brasilerão Betano", temporada: "14/15", foto:"imgs/brasileirao.webp"},
    { nome: "Brasilerão Betano", temporada: "10/11", foto:"imgs/brasileirao.webp"},
    { nome: "Brasilerão Betano", temporada: "04/05", foto:"imgs/brasileirao.webp"},
    { nome: "Brasilerão Betano", temporada: "98/99", foto:"imgs/brasileirao.webp"},
    { nome: "Brasilerão Betano", temporada: "97/98", foto:"imgs/brasileirao.webp"},
    { nome: "Brasilerão Betano", temporada: "89/90", foto:"imgs/brasileirao.webp"},
    { nome: "Copa Betano do Brasil", temporada: "24/25", foto:"imgs/copa.webp"},
    { nome: "Copa Betano do Brasil", temporada: "08/09", foto:"imgs/copa.webp"},
    { nome: "Copa Betano do Brasil", temporada: "01/02", foto:"imgs/copa.webp"},
    { nome: "Copa Betano do Brasil", temporada: "94/95" , foto:"imgs/copa.webp"},
    { nome: "FIFA Club World Cup", temporada: "12/13" , foto:"imgs/worldcup.webp"},
    { nome: "FIFA Club World Cup", temporada: "99/00", foto:"imgs/worldcup.webp"},
    { nome: "CONMEBOL Libertadores", temporada: "11/12", foto:"imgs/libertadores.webp"},
  ];
  res.render("titulos", {
    titulos: titulos,
  });
});

export default rota;
