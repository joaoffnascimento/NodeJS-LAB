const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://joaoffnascimento:qwerty123@qdlab-o9ea5.mongodb.net/authApi?retryWrites=true&w=majority",
  { useMongoClient: true }
);

mongoose.Promise = global.Promise;

module.exports = mongoose;
