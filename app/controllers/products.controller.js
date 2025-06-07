const db = require("../models");
const Products = db.products;

exports.findAll = (req, res) => {
  {
    Products.find()
      .then((result) => {
        res.status(200).send(result);
      })
      .catch((err) => {
        res.status(409).send({
          message: err.message,
        });
      });
  }
};
