const bcrypt = require("bcryptjs");
const User = require("../models/User");

const usersRouter = require("express").Router();

usersRouter.post("/", async (request, response) => {
  const { body } = request;
  const { id, avatar, email, password, name, surname, age, role } = body;

  const hashedPass = await bcrypt.hash(password, 10);
  const user = new User({
    id,
    avatar,
    email,
    password: hashedPass,
    name,
    surname,
    age,
    role,
  });

  const savedUser = await user.save();

  response.json(savedUser);
});

module.exports = usersRouter;
