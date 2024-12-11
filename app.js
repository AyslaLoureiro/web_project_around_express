const express = require("express");
const app = express();
const { PORT = 3000 } = process.env;
const userRoutes = require("./routes/users");
const cardRoutes = require("./routes/cards");
// Middleware para parsing de JSON
app.use(express.json());

// Rota de teste
app.get("/", (req, res) => {
  res.send("Server is running!");
});

// Rotas de usuários
app.use("/users", userRoutes);

// Rotas de cards
app.use("/cards", cardRoutes);

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`App listening at port ${PORT}`);
});
