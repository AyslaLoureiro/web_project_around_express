const router = require('express').Router();
const fs = require('fs');
const path = require('path');

let cards = [];

// Define o caminho absoluto para o arquivo JSON
console.log(__dirname);

const cardFilePath = path.join(__dirname, '..', 'data', 'cards.json');

// Lê o arquivo JSON de forma síncrona ao iniciar
try {
  const data = fs.readFileSync(cardFilePath, 'utf8');
  cards = JSON.parse(data);
} catch (err) {
  console.error('Erro ao carregar o arquivo JSON:', err);
}

// Rota para buscar todos os cards
router.get('/', (_req, res) => res.status(200).send(cards));

module.exports = router;
