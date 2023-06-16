const bcrypt = require("bcrypt");
const Io = require("../utils/io");
const Users = new Io("./database/users.json");
const userValidation = require("../validations/auth.validation")
const User = require("../models/User");
const jwt = require("../utils/jwt");

const login = async (req, res) => {
  const {username, password} = req.body;

  const error = userValidation({username, password});
  if (error) return res.status(400).json({message: error});

  const users = await Users.read();

  const findUser = users.find((user) => user.username === username);

  if (!findUser) {
    return res.redirect("/login");
  }

  const checkPass = await bcrypt.compare(password, findUser.password);

  if (!checkPass) {
    return res.redirect("/login");
  }

  const token = jwt.sign({userId: findUser.id});

  res.cookie("token", token);

  res.redirect("/admin");
};

const loginGet = async (req, res) => {
  res.render("login");
};

module.exports = {
  login,
  loginGet,
};
