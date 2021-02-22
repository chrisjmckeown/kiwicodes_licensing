const db = require('../models/sql');
const { validationResult } = require('express-validator/check');

// Defining methods for the toolsController
module.exports = {
  // @route   GET api/tools
  // @desc    Get all tools
  // @access  Public
  findAll: async (req, res) => {
    try {
      const tools = await db.tool.findAll();
      res.json(tools);
    } catch (err) {
      console.error(err.message);
      return res.status(500).send('Server error');
    }
  },
  // @route   GET api/tools/:id
  // @desc    Get tool by id
  // @access  Public
  findById: async (req, res) => {
    try {
      const tool = await db.tool.findOne({
        where: {
          id: req.params.id,
        },
      });
      res.json(tool);
    } catch (err) {
      console.error(err.message);
      return res.status(500).send('Server error');
    }
  },
  // @route   POST api/tools
  // @desc    Create a tool (admins only)
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

    const toolFeilds = {
      name,
      description,
      purchaseLink,
      helpLink,
    };

    try {
      const tool = new db.tool(toolFeilds);
      await tool.save();
      return res.json(tool);
    } catch (err) {
      console.error(err.message);
      return res.status(500).send('Server error');
    }
  },
  // @route   PUT api/tools/:id
  // @desc    Update a tool (admins only)
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

    const toolFeilds = {
      name,
      description,
      purchaseLink,
      helpLink,
    };

    try {
      let tool = await db.tool.findOne({
        where: {
          id: req.params.id,
        },
      });

      if (tool) {
        tool = await tool.update(toolFeilds);
        return res.json(tool);
      }
    } catch (err) {
      console.error(err.message);
      return res.status(500).send('Server error');
    }
  },
  // @route   DELETE api/tools/:id
  // @desc    Delete a tool (admins only)
  // @access  Private
  remove: async (req, res) => {
    try {
      if (req.member.role !== 'kiwicodes') {
        return res.status(400).send('Invalid permission');
      }
      await db.tool.destroy({
        where: {
          id: req.params.id,
        },
      });

      return res.json('Tool deleted');
    } catch (err) {
      console.error(err.message);
      return res.status(500).send('Server error');
    }
  },
};
