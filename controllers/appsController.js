const db = require('../models/sql');
const { validationResult } = require('express-validator');

// Defining methods for the appsController
module.exports = {
  // @route   GET api/apps
  // @desc    Get all apps
  // @access  Public
  findAll: async (req, res) => {
    try {
      const apps = await db.app.findAll({
        include: [
          {
            model: db.product,
            attributes: ['name'],
          },
        ],
      });
      return res.json(apps);
    } catch (err) {
      console.error(err.message);
      return res.status(500).send('Server error');
    }
  },
  // @route   GET api/apps/ProductId/:id
  // @desc    Get add by product id
  // @access  Private
  findByProductId: async (req, res) => {
    try {
      const app = await db.app.findAll({
        where: {
          productId: req.params.id,
        },
      });
      return res.json(app);
    } catch (err) {
      console.error(err.message);
      return res.status(500).send('Server error');
    }
  },
  // @route   GET api/apps/:id
  // @desc    Get app by id
  // @access  Public
  findById: async (req, res) => {
    try {
      const app = await db.app.findByPk(req.params.id);
      return res.json(app);
    } catch (err) {
      console.error(err.message);
      return res.status(500).send('Server error');
    }
  },
  // @route   POST api/apps
  // @desc    Create a app (kiwicodes admin only)
  // @access  Private
  create: async (req, res) => {
    if (req.member.role !== 'kiwicodes') {
      return res.status(400).send('Invalid permission');
    }
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, number, description, helpLink, productId } = req.body;

    const appFeilds = {
      name,
      number,
      description,
      helpLink,
      productId,
    };
    if (productId === '0') appFeilds.productId = null;

    try {
      const app = new db.app(appFeilds);
      await app.save();
      return res.json(app);
    } catch (err) {
      console.error(err.message);
      return res.status(500).send('Server error');
    }
  },
  // @route   PUT api/apps/:id
  // @desc    Update a app (kiwicodes admin only)
  // @access  Private
  update: async (req, res) => {
    if (req.member.role !== 'kiwicodes') {
      return res.status(400).send('Invalid permission');
    }
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, number, description, helpLink, productId } = req.body;

    const appFeilds = {};
    if (name !== undefined) appFeilds.name = name;
    if (number !== undefined) appFeilds.number = number;
    if (description !== undefined) appFeilds.description = description;
    if (helpLink !== undefined) appFeilds.helpLink = helpLink;
    if (productId !== undefined) appFeilds.productId = productId;
    if (productId === '0') appFeilds.productId = null;

    try {
      let app = await db.app.findByPk(req.params.id);

      if (app) {
        app = await app.update(appFeilds);
        return res.json(app);
      }
    } catch (err) {
      console.error(err.message);
      return res.status(500).send('Server error');
    }
  },
  // @route   DELETE api/apps/:id
  // @desc    Delete a app (kiwicodes admin only)
  // @access  Private
  remove: async (req, res) => {
    try {
      if (req.member.role !== 'kiwicodes') {
        return res.status(400).send('Invalid permission');
      }
      await db.app.destroy({
        where: {
          id: req.params.id,
        },
      });

      return res.json('App deleted');
    } catch (err) {
      console.error(err.message);
      return res.status(500).send('Server error');
    }
  },
};
