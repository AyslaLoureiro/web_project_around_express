const router = require('express').Router();
const fs = require('fs');
const path = require('path');

let users = [];

const usersFilePath = path.join(__dirname, '..', 'data', 'users.json');
// Lê o arquivo JSON de forma síncrona ao iniciar
try {
  const data = fs.readFileSync(usersFilePath, 'utf8');
  users = JSON.parse(data);
} catch (err) {
  console.error('Erro ao carregar o arquivo JSON:', err);
}

// Rota para buscar todos os usuários
router.get('/', (_req, res) => res.status(200).send(users));

// Rota para obter usuário pelo ID
router.get('/:id', (req, res) => {
  const { id } = req.params;

  // Encontra o usuário com o ID fornecido
  const user = users.find((u) => u._id === id);

  if (user) {
    return res.send(user);
  }

  return res.status(404).json({ error: 'ID do usuário não encontrado' });
});

module.exports = router;
