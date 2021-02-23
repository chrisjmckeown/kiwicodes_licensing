const db = require('../models/sql');
const { validationResult } = require('express-validator/check');

// Defining methods for the buildController
module.exports = {
  // @route   GET api/builds
  // @desc    Get all builds
  // @access  Public
  findAll: async (req, res) => {
    try {
      const builds = await db.build.findAll();
      res.json(builds);
    } catch (err) {
      console.error(err.message);
      return res.status(500).send('Server error');
    }
  },
  // @route   GET api/builds/:id
  // @desc    Get build by id
  // @access  Public
  findById: async (req, res) => {
    try {
      const build = await db.build.findByPk(req.params.id);
      res.json(build);
    } catch (err) {
      console.error(err.message);
      return res.status(500).send('Server error');
    }
  },
  // @route   POST api/builds
  // @desc    Create a build
  // @access  Private
  create: async (req, res) => {
    if (req.member.role !== 'kiwicodes') {
      return res.status(400).send('Invalid permission');
    }

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { buildNumber, comments, updates, productId } = req.body;

    const buildFeilds = {
      buildNumber,
      comments,
      updates,
      productId,
    };

    try {
      const build = new db.build(buildFeilds);
      await build.save();
      return res.json(build);
    } catch (err) {
      console.error(err.message);
      return res.status(500).send('Server error');
    }
  },
  // @route   PUT api/builds/:id
  // @desc    Update a build
  // @access  Private
  update: async (req, res) => {
    if (req.member.role !== 'kiwicodes') {
      return res.status(400).send('Invalid permission');
    }

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { buildNumber, comments, updates, productId } = req.body;

    const buildFeilds = {
      buildNumber,
      comments,
      updates,
      productId,
    };

    try {
      let build = await db.build.findByPk(req.params.id);

      if (build) {
        build = await build.update(buildFeilds);
        return res.json(build);
      }
    } catch (err) {
      console.error(err.message);
      return res.status(500).send('Server error');
    }
  },
};
