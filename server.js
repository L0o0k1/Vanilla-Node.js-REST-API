const http = require("http");
const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  delProduct,
} = require("./controller/productControler");
const { create } = require("domain");

const server = http.createServer((req, res) => {
  if (req.url === "/api/products" && req.method === "GET") {
    getProducts(req, res);
  } else if (
    req.url.match(/\/api\/products\/([0-9])/) &&
    req.method === "GET"
  ) {
    const id = req.url.split("/")[3];
    getProduct(req, res, id);
  } else if (req.url === "/api/products" && req.method === "POST") {
    createProduct(req, res);
  } else if (
    req.url.match(/\/api\/products\/([0-9])/) &&
    req.method === "PUT"
  ) {
    const id = req.url.split("/")[3];
    updateProduct(req, res, id);
  } else if (
    req.url.match(/\/api\/products\/([0-9])/) &&
    req.method === "DELETE"
  ) {
    const id = req.url.split("/")[3];
    delProduct(req, res, id);
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Route Not Found!" }));
  }
});

const PORT = process.env.PORT || 8000;

server.listen(PORT, () => console.log(`running on .. ${PORT}`));
