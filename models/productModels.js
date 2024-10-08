// Vars
let products = require("../data/products");
const { v4: uuidv4 } = require("uuid");
const { writeDataToFaile } = require("../util");
const { delProduct } = require("../controller/productControler");

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
// Update Function :
function update(id, product) {
  return new Promise((resolve, reject) => {
    const index = products.findIndex((p) => p.id === id);
    products[index] = { id, ...product };
    writeDataToFaile("./data/products.json", products);
    resolve(products[index]);
  });
}
// Del Function :
function remove(id) {
  return new Promise((resolve, reject) => {
    products = products.filter((p) => p.id !== id);
    writeDataToFaile("./data/products.json", products);
    resolve(products[index]);
  });
}
//------------------------
module.exports = {
  findAll,
  findById,
  create,
  update,
  remove,
};
