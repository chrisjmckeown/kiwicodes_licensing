const db = require('../models/sql');

// Defining methods for the appActivationsController
module.exports = {
  // @route   GET api/appActivations
  // @desc    Get all app activations
  // @access  Private
  findAll: async (req, res) => {
    try {
      const appActivations = await db.appActivation.findAll();
      res.json(appActivations);
    } catch (err) {
      console.error(err.message);
      return res.status(500).send('Server error');
    }
  },
  // @route   GET api/appActivations/:id
  // @desc    Get app activation by id
  // @access  Private
  findById: async (req, res) => {
    try {
      const appActivation = await db.appActivation.findOne({
        where: {
          id: req.params.id,
        },
      });
      res.json(appActivation);
    } catch (err) {
      console.error(err.message);
      return res.status(500).send('Server error');
    }
  },
  // @route   POST api/appActivations
  // @desc    Create a app activation
  // @access  Private
  create: async (req, res) => {
    const {
      dateActivated,
      buildNumber,
      revitBuild,
      appId,
      memberId,
    } = req.body;

    const appActivationFeilds = {
      dateActivated,
      buildNumber,
      revitBuild,
      appId,
      memberId,
    };

    try {
      const appActivation = new db.appActivation(appActivationFeilds);
      await appActivation.save();
      return res.json(appActivation);
    } catch (err) {
      console.error(err.message);
      return res.status(500).send('Server error');
    }
  },
};
