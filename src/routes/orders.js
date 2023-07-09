const router = require("express").Router();
const Order = require("../models/order");

// Create a new order
const createOrder = async (orderData) => {
    try {
      const newOrder = new Order(orderData);
      const savedOrder = await newOrder.save();
      console.log('Order created:', savedOrder);
    } catch (error) {
      console.error('Error creating order:', error);
    }
  };