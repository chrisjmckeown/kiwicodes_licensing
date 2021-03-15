const db = require('../models/sql');
const { validationResult } = require('express-validator');

// Defining methods for the productsController
module.exports = {
  // @route   GET api/products
  // @desc    Get all products
  // @access  Public
  findAll: async (req, res) => {
    try {
      const products = await db.product.findAll();
      res.json(products);
    } catch (err) {
      console.error(err.message);
      return res.status(500).send('Server error');
    }
  },
  // @route   GET api/products/:id
  // @desc    Get product by id
  // @access  Public
  findById: async (req, res) => {
    try {
      const product = await db.product.findByPk(req.params.id);
      res.json(product);
    } catch (err) {
      console.error(err.message);
      return res.status(500).send('Server error');
    }
  },
  // @route   POST api/products
  // @desc    Create a product (kiwicodes admin only)
  // @access  Private
  create: async (req, res) => {
    if (req.member.role !== 'kiwicodes') {
      return res.status(400).send('Invalid permission');
    }
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, description, purchaseLink, helpLink } = req.body;

    const productFeilds = {
      name,
      description,
      purchaseLink,
      helpLink,
    };

    try {
      const product = new db.product(productFeilds);
      await product.save();
      return res.json(product);
    } catch (err) {
      console.error(err.message);
      return res.status(500).send('Server error');
    }
  },
  // @route   PUT api/products/:id
  // @desc    Update a product (kiwicodes admin only)
  // @access  Private
  update: async (req, res) => {
    if (req.member.role !== 'kiwicodes') {
      return res.status(400).send('Invalid permission');
    }
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, description, purchaseLink, helpLink } = req.body;

    const productFeilds = {
      name,
      description,
      purchaseLink,
      helpLink,
    };

    try {
      let product = await db.product.findByPk(req.params.id);

      if (product) {
        product = await product.update(productFeilds);
        return res.json(product);
      }
    } catch (err) {
      console.error(err.message);
      return res.status(500).send('Server error');
    }
  },
  // @route   DELETE api/products/:id
  // @desc    Delete a product (kiwicodes admin only)
  // @access  Private
  remove: async (req, res) => {
    try {
      if (req.member.role !== 'kiwicodes') {
        return res.status(400).send('Invalid permission');
      }
      await db.product.destroy({
        where: {
          id: req.params.id,
        },
      });

      return res.json('Product deleted');
    } catch (err) {
      console.error(err.message);
      return res.status(500).send('Server error');
    }
  },
};
