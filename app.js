const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/** Connect to database */
const db = require("./app/models");
db.mongoose
  .connect(db.url)
  .then(() => {
    console.log("Server connected to database");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => {
  res.json({ message: " Hello Vuestroe server" });
});

/** Router API */
require("./app/routes/product.route")(app);

app.listen(PORT, () => {
  console.log(`App server running on http://localhost:${PORT}`);
});
