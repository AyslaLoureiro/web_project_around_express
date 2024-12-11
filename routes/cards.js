const router = require("express").Router();
const fs = require("fs");
let cards = [];

// Lê o arquivo JSON de forma síncrona ao iniciar
try {
  const data = fs.readFileSync("./data/cards.json", "utf8");
  cards = JSON.parse(data);
} catch (err) {
  console.error("Erro ao carregar o arquivo JSON:", err);
}

// Rota para buscar todos os cards
router.get("/", (_req, res) => {
  return res.status(200).send(cards);
});

module.exports = router;
