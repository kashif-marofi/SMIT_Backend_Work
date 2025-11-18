const express = require("express");
const app = express();
// const data = require("./data.json")

app.use(express.json());
const products = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    category: "men's clothing",
  },
  {
    id: 2,
    title: "Mens Casual Premium Slim Fit T-Shirts ",
    price: 22.3,
    category: "men's clothing",
  },
  {
    id: 3,
    title: "Mens Cotton Jacket",
    price: 55.99,
    category: "men's clothing",
  },
  {
    id: 4,
    title: "Mens Casual Slim Fit",
    price: 15.99,
    category: "men's clothing",
  },
];

// Intial Message:
app.get("/", (req, resp) => {
  resp.send("Hello From Express Server How are you");
});

// Load All Products:
app.get("/products", (req, resp) => {
  resp.json(products);
});

// Add a New Product:
app.post("/addProduct", (req, resp) => {
  const addedProduct = req.body;
  console.log("Added Product ---> ", addedProduct);
  products.push(addedProduct);
  resp.send({
    message: "Product Added Successfully!",
    product: addedProduct,
  });
});

// Update a Product:
app.put("/updateProduct/:id", (req, resp) => {
  const productId = parseInt(req.params.id);

  const updatedData = req.body;

  const productIndex = products.findIndex((p) => p.id === productId);

  if (productIndex === -1) {
    return resp.status(404).json({ message: "Product Not Found!" });
  }
  
  products[productIndex] = { ...products[productIndex], ...updatedData };

  resp.json({
    message: "Product Updated Successfully",
    updatedProduct: products[productIndex],
  });
});

// Delete Product:
app.delete("/deleteProduct/:id", (req, resp) => {
  const productId = parseInt(req.params.id);

  const productIndex = products.findIndex((p) => p.id === productId);

  if (productIndex === -1) {
    return resp.status(404).json({ message: "Product Not Found!" });
  }

  const deletedProduct = products.splice(productIndex, 1)[0];

  resp.json({
    message: "Product Deleted Successfully!",
    deleted: deletedProduct,
  });
});

// Initiallize Port:
app.listen(3000, () => {
  console.log("This Server is running on Port 3000");
});
