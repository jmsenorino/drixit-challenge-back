const bcrypt = require("bcryptjs");
const loginRouter = require("express").Router();
const User = require("../models/User");
const jwt = require("jsonwebtoken");

loginRouter.post("/", async (request, response) => {
  const { body } = request;
  const { email, password } = body;

  const user = await User.findOne({ email });
  const passwordCorrect =
    user === null ? false : await bcrypt.compare(password, user.password);

  if (!(user && passwordCorrect)) {
    response.status(401).json({
      error: "invalid user or password",
    });
  } else {
    const userForToken = {
      id: user._id,
      email: email,
    };

    const token = jwt.sign(userForToken, process.env.SECRET);

    response.send({
      _id: user._id,
      id: user.id,
      token,
    });
  }
});

module.exports = loginRouter;
