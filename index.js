//requerido para reemplazar los process.env.*
require("dotenv").config();

const connectToDB = require("./mongo.js");

const express = require("express");
const app = express();
const cors = require("cors");

//Models
const User = require("./models/User");

//Middlewares
const userExtractor = require("./middleware/userExtractor");

//Controllers
const loginRouter = require("./controllers/login.controller");
const usersRouter = require("./controllers/users.controller");
const getUserRouter = require("./controllers/getUser.controller");

app.use(cors());
app.use(express.json());
app.use("/api/login", loginRouter);
app.use("/api/users", usersRouter);
app.use("/api/getUser", getUserRouter);

connectToDB();

const PORT = process.env.PORT;
app.listen(PORT),
  () => {
    console.log(`Server running on port ${PORT}`);
  };
