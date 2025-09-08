const NProduct = require("../models/NProduct");


const getProducts = async (req, res) => {
  try {
    let products = await NProduct.find();

    if (req.query.sort === "asc") {
      products = products.sort((a, b) => a.price - b.price);
    } else if (req.query.sort === "desc") {
      products = products.sort((a, b) => b.price - a.price);
    }

    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};

const addProduct = async (req, res) => {
  try {
    const { name, price, description, category, image } = req.body;

    if (!name || !price || !image) {
      return res
        .status(400)
        .json({ message: "Name, Price and Image are required" });
    }

    const product = await NProduct.create({
      name,
      price,
      description,
      category,
      image,
    });

    
    res.status(201).json({
      name: product.name,
      price: product.price,
      description: product.description,
      category: product.category,
      image: product.image,
    });
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};




const updateProduct = async (req, res) => {
  try {
    const { name, price, description, category, image } = req.body;

    const product = await NProduct.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    product.name = name || product.name;
    product.price = price || product.price;
    product.description = description || product.description;
    product.category = category || product.category;
    product.image = image || product.image;

    const updatedProduct = await product.save();

    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const product = await NProduct.findByIdAndDelete(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({ message: "Product deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};  

module.exports = {
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct,
};