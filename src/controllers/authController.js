const express = require("express");

const User = require("./../model/user");

const router = express.Router();

// Pegar parametros do usuario e repassar para user.Create
router.post("/register", async (req, res) => {
  // Adicionar uma validacao para aparecer uma mensagem mais "amigavel"
  // Caso já exista um usuario com email cadastrado

  try {
    if (await user.findOne({ user }))
      return res.status(400).send({ error: "user already exists" });
    const user = await User.create(req.body);
    //Apagar password assim que o usuario for criado para nao sair no res
    user.password = undefined;
    return res.send({ user });
  } catch (error) {
    return res.status(400).send({ error: "registration failed" });
  }
});

module.exports = app => app.use("/auth", router);
