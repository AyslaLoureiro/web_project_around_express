const router = require("express").Router();
const fs = require("fs");
let users = [];

// Lê o arquivo JSON de forma síncrona ao iniciar
try {
  const data = fs.readFileSync("./data/users.json", "utf8");
  users = JSON.parse(data);
} catch (err) {
  console.error("Erro ao carregar o arquivo JSON:", err);
}

// Rota para buscar todos os usuários
router.get("/", (_req, res) => {
  return res.status(200).send(users);
});

// Rota para obter usuário pelo ID
router.get("/:id", (req, res) => {
  const { id } = req.params;

  // Encontra o usuário com o ID fornecido
  const user = users.find((user) => user._id === id);

  if (user) {
    return res.send(user);
  }

  return res.status(404).send("ID do usuário não encontrado");
});

module.exports = router;
