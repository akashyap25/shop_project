const router = require("express").Router();
const Product = require("../models/product");
const Shop = require("../models/shop");


// Function to add a product to a shop
const addProductToShop = async (shopId, productId) => {
  try {
    const shop = await Shop.findById(shopId);
    shop.products.push(productId);
    await shop.save();
    console.log('Product added to the shop:', productId);
  } catch (error) {
    console.error('Error adding product to the shop:', error);
  }
};

// Function to remove a product from a shop
const removeProductFromShop = async (shopId, productId) => {
  try {
    const shop = await Shop.findById(shopId);
    shop.products.pull(productId);
    await shop.save();
    console.log('Product removed from the shop:', productId);
  } catch (error) {
    console.error('Error removing product from the shop:', error);
  }
};

// Function to get all products in a shop
const getShopProducts = async (shopId) => {
  try {
    const shop = await Shop.findById(shopId).populate('products');
    console.log('Shop products:', shop.products);
  } catch (error) {
    console.error('Error getting shop products:', error);
  }
};


// Add a product to the shop
addProductToShop(shopId, productId);

// Remove a product from the shop
removeProductFromShop(shopId, productId);

// Get all products in the shop
getShopProducts(shopId);
