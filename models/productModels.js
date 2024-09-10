// Vars
const products = require("../data/products");
const { v4: uuidv4 } = require("uuid");
const { writeDataToFaile } = require("../util");

// =========== Functions : ===========
function findAll() {
  return new Promise((resolve, reject) => {
    resolve(products);
  });
}

//-----------------------------------
// Specification Function :
function findById(id) {
  return new Promise((resolve, reject) => {
    const product = products.find((p) => p.id === id);
    resolve(product);
  });
}
//-----------------------------------
// Create Function :
function create(product) {
  return new Promise((resolve, reject) => {
    const newProduct = { id: uuidv4(), ...product };
    products.push(newProduct);
    writeDataToFaile("./data/products.json", products);
    resolve(newProduct);
  });
}
//------------------------
module.exports = {
  findAll,
  findById,
  create,
};
