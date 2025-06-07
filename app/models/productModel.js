const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  code: String,
  name: String,
  price: Number,
  description: String,
  imageUrl: String,
  averageRating: Number,
});

const Product = mongoose.model("Products", ProductSchema);
module.exports = Product;
