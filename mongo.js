const mongoose = require("mongoose");
const connectionString = process.env.URI_MONGODB;

//Conexion a MongoDB
const connectToDB = () => {
  mongoose
    .connect(connectionString)
    .then(() => {
      console.log("Database Connected");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connectToDB;
