const db = require('../models/sql');

// Defining methods for the toolActivationsController
module.exports = {
  // @route   GET api/toolActivations
  // @desc    Get all tool activations
  // @access  Private
  findAll: async (req, res) => {
    try {
      const toolActivations = await db.toolActivation.findAll();
      res.json(toolActivations);
    } catch (err) {
      console.error(err.message);
      return res.status(500).send('Server error');
    }
  },
  // @route   GET api/toolActivations/:id
  // @desc    Get tool activation by id
  // @access  Private
  findById: async (req, res) => {
    try {
      const toolActivation = await db.toolActivation.findOne({
        where: {
          id: req.params.id,
        },
      });
      res.json(toolActivation);
    } catch (err) {
      console.error(err.message);
      return res.status(500).send('Server error');
    }
  },
  // @route   POST api/toolActivations
  // @desc    Create a tool activation
  // @access  Private
  create: async (req, res) => {
    const { dateActivated, pcID, toolId, memberId } = req.body;

    console.log(dateActivated);
    const toolActivationFeilds = {
      dateActivated,
      pcID,
      toolId,
      memberId,
    };

    try {
      const toolActivation = new db.toolActivation(toolActivationFeilds);
      await toolActivation.save();
      return res.json(toolActivation);
    } catch (err) {
      console.error(err.message);
      return res.status(500).send('Server error');
    }
  },
  // @route   PUT api/toolActivations/:id
  // @desc    Update a tool activation release datetime
  // @access  Private
  update: async (req, res) => {
    const { dateReleased } = req.body;
    const toolActivationFeilds = {
      dateReleased,
    };

    try {
      let toolActivation = await db.toolActivation.findOne({
        where: {
          id: req.params.id,
        },
      });

      if (toolActivation) {
        toolActivation = await toolActivation.update(toolActivationFeilds);
        return res.json(toolActivation);
      }
    } catch (err) {
      console.error(err.message);
      return res.status(500).send('Server error');
    }
  },
};
