const Product = require("../models/productModels");
const { grtPostData, getPostData } = require("../util");
// For all
async function getProducts(req, res) {
  try {
    const products = await Product.findAll();
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(products));
  } catch (error) {
    console.log(error);
  }
}
//-------------------------------------
// For Single ID
async function getProduct(req, res, id) {
  try {
    const product = await Product.findById(id);
    if (!product) {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Product not found" }));
    } else {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(product));
    }
  } catch (error) {
    console.log(error);
  }
}
//--------------------------------------
// For POST requests: "CREATE Products"
async function createProduct(req, res, id) {
  try {
    const body = await getPostData(req);
    const { title, description, price } = JSON.parse(body);
    const product = {
      title,
      description,
      price,
    };
    const newProduct = await Product.create(product);
    res.writeHead(201, { "Content-Type": "application/json" });
    return res.end(JSON.stringify(newProduct));
  } catch (error) {
    console.log(error);
  }
}

// For PUT requests: "Update Products"
async function updateProduct(req, res) {
  try {
    const product = await Product.findById(id);
    if (!product) {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Product not found" }));
    } else {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Product not found" }));
      const body = await getPostData(req);
      const { title, description, price } = JSON.parse(body);
      const productData = {
        title: title || product.title,
        description: description || product.description,
        price: price || product.price,
      };
      const upProduct = await Product.update(id, productData);
      res.writeHead(200, { "Content-Type": "application/json" });
      return res.end(JSON.stringify(upProduct));
    }
  } catch (error) {
    console.log(error);
  }
}
// For Single ID Delete
async function delProduct(req, res, id) {
  try {
    const product = await Product.findById(id);
    if (!product) {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Product not found" }));
    } else {
      await Product.remove(id);
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: `Product ${id} Removed.` }));
    }
  } catch (error) {
    console.log(error);
  }
}
module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  delProduct,
};
