const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: " Hello Vuestroe server" });
});

app.listen(PORT, () => {
  console.log(`App server running on http://localhost:${PORT}`);
});
