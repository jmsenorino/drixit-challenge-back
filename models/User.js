const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  id: String,
  avatar: String,
  email: String,
  password: String,
  name: String,
  surname: String,
  age: Number,
  role: String,
});

//I use this transform so my _id, __v and password are not returned when i request my user
userSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    delete returnedObject._id;
    delete returnedObject.__v;
    delete returnedObject.password;
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
