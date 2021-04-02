const db = require('../models/sql');

// Defining methods for the productActivationsController
module.exports = {
  // @route   GET api/productActivations
  // @desc    Get all product activations
  // @access  Private
  findAll: async (req, res) => {
    try {
      const productActivations = await db.productActivation.findAll();
      return res.json(productActivations);
    } catch (err) {
      console.error(err.message);
      return res.status(500).send('Server error');
    }
  },
  // @route   GET api/productActivations/:id
  // @desc    Get product activation by id
  // @access  Private
  findById: async (req, res) => {
    try {
      const productActivation = await db.productActivation.findByPk(
        req.params.id
      );
      return res.json(productActivation);
    } catch (err) {
      console.error(err.message);
      return res.status(500).send('Server error');
    }
  },
  // @route   POST api/productActivations
  // @desc    Create a product activation
  // @access  Private
  create: async (req, res) => {
    const { dateActivated, pcID, productId, memberId } = req.body;

    const productActivationFeilds = {
      dateActivated,
      pcID,
      productId,
      memberId,
    };

    try {
      const productActivation = new db.productActivation(
        productActivationFeilds
      );
      await productActivation.save();
      return res.json(productActivation);
    } catch (err) {
      console.error(err.message);
      return res.status(500).send('Server error');
    }
  },
  // @route   PUT api/productActivations/:id
  // @desc    Update a product activation release datetime
  // @access  Private
  update: async (req, res) => {
    const { dateReleased } = req.body;
    const productActivationFeilds = {};
    if (dateReleased) appFeilds.dateReleased = dateReleased;

    try {
      let productActivation = await db.productActivation.findByPk(
        req.params.id
      );

      if (productActivation) {
        productActivation = await productActivation.update(
          productActivationFeilds
        );
        return res.json(productActivation);
      }
    } catch (err) {
      console.error(err.message);
      return res.status(500).send('Server error');
    }
  },
};
