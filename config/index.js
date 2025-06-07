const { default: mongoose } = require("mongoose");
const dbConfig = require("./db.config");

mongoose
  .connect(dbConfig)
  .then(() => {
    console.log("database connected");
  })
  .catch((err) => {
    console.log(err);
  });
