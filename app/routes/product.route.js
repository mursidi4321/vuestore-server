module.exports = (app) => {
  {
    const products = require("../controllers/products.controller");
    const router = require("express").Router();

    router.get("/", products.findAll);

    app.use("/api/products", router);
  }
};
