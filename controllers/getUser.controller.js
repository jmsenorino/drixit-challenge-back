const User = require("../models/User");
const getUserRouter = require("express").Router();

getUserRouter.post("/", async (request, response) => {
  const { body } = request;
  const { id } = body;

  const user = await User.findOne({ id });
  if (!user) {
    response.status(404).json({
      error: "User not found",
    });
  }

  response.send({
    id: user.id,
    email: user.email,
    avatar: user.avatar,
    age: user.age,
    name: user.name,
    role: user.role,
    surname: user.surname,
  });
});

module.exports = getUserRouter;
