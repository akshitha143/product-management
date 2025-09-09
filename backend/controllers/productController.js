const NProduct = require("../models/NProduct");


const getProducts = async (req, res) => {
  try {
    const products = await NProduct.find().select("name price description category image");
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
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
   res.status(500).json({ message:err.message  });
  }
};




const updateProduct = async (req, res) => {
  try {
    const product = await NProduct.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true } 
    ).select("name price description category image");

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({
      message: "Product updated successfully",
      product,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
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
    res.status(500).json({ message:err.message  });
  }
};  

module.exports = {
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct,
};