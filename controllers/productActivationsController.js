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
    const { dateReleased, pcID, productId, memberId } = req.body;
    const productActivationFeilds = {};
    if (dateReleased !== undefined)
      productActivationFeilds.dateReleased = dateReleased;

    try {
      let productActivation = await db.productActivation.findOne({
        where: {
          pcID,
          productId,
          memberId,
          dateReleased: null,
        },
      });

      if (productActivation) {
        productActivation = await productActivation.update(
          productActivationFeilds
        );
        return res.json(productActivation);
      } else {
        return res
          .status(400)
          .json({ errors: [{ msg: 'No Product Activations to release.' }] });
      }
    } catch (err) {
      console.error(err.message);
      return res.status(500).send('Server error');
    }
  },
  // @route   GET api/productActivations/check
  // @desc    Check if a Product is currently activated
  // @access  Private
  checkForActivation: async (req, res) => {
    const { productId, memberId } = req.body;
    try {
      let productActivation = await db.productActivation.findOne({
        where: {
          productId,
          memberId,
          dateReleased: null,
        },
      });

      if (productActivation) {
        return res.json({ msg: 'Product is already Activated.', result: true });
      } else {
        return res.json({ msg: 'No Product Activations.', result: false });
      }
    } catch (err) {
      console.error(err.message);
      return res.status(500).send('Server error');
    }
  },
};
