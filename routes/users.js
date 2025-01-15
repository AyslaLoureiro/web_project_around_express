const router = require("express").Router();
const {
  getUsers,
  getUserById,
  createUser,
  updateUserProfile,
  updateUserAvatar,
} = require("../controllers/users.js");

// Rota para buscar todos os usuários
router.get("/", getUsers);

// Rota para obter usuário pelo ID
router.get("/:id", getUserById);

router.post("/", createUser);

router.patch("/", updateUserProfile);

router.put("/", updateUserAvatar);

module.exports = router;
