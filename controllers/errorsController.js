const db = require('../models/sql');
const { validationResult } = require('express-validator');

// Defining methods for the errorsController
module.exports = {
  // @route   GET api/errors
  // @desc    Get all errors
  // @access  Public
  findAll: async (req, res) => {
    if (req.member.role !== 'kiwicodes') {
      return res.status(400).send('Invalid permission');
    }
    try {
      const errors = await db.error.findAll();
      return res.json(errors);
    } catch (err) {
      console.error(err.message);
      return res.status(500).send('Server error');
    }
  },
  // @route   GET api/errors/:id
  // @desc    Get error by id
  // @access  Public
  findById: async (req, res) => {
    if (req.member.role !== 'kiwicodes') {
      return res.status(400).send('Invalid permission');
    }
    try {
      const error = await db.error.findByPk(req.params.id);
      return res.json(error);
    } catch (err) {
      console.error(err.message);
      return res.status(500).send('Server error');
    }
  },
  // @route   POST api/errors
  // @desc    Create a error
  // @access  Private
  create: async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const error = new db.error(req.body);
      await error.save();
      return res.json(error);
    } catch (err) {
      console.error(err.message);
      return res.status(500).send('Server error');
    }
  },
  // @route   PUT api/errors/:id
  // @desc    Update a error
  // @access  Private
  update: async (req, res) => {
    if (req.member.role !== 'kiwicodes') {
      return res.status(400).send('Invalid permission');
    }

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      date,
      message,
      className,
      methodName,
      buildNumber,
      revitBuild,
      memberId,
      appId,
    } = req.body;
    const errorFeilds = {};
    if (date !== undefined) errorFeilds.date = date;
    if (message !== undefined) errorFeilds.message = message;
    if (className !== undefined) errorFeilds.className = className;
    if (methodName !== undefined) errorFeilds.methodName = methodName;
    if (buildNumber !== undefined) errorFeilds.buildNumber = buildNumber;
    if (revitBuild !== undefined) errorFeilds.revitBuild = revitBuild;
    if (memberId !== undefined) errorFeilds.memberId = memberId;
    if (appId !== undefined) errorFeilds.appId = appId;

    try {
      let error = await db.error.findByPk(req.params.id);

      if (error) {
        error = await error.update(errorFeilds);
        return res.json(error);
      }
    } catch (err) {
      console.error(err.message);
      return res.status(500).send('Server error');
    }
  },
  // @route   DELETE api/errors/:id
  // @desc    Delete a error (kiwicodes admin only)
  // @access  Private
  remove: async (req, res) => {
    try {
      if (req.member.role !== 'kiwicodes') {
        return res.status(400).send('Invalid permission');
      }
      await db.error.destroy({
        where: {
          id: req.params.id,
        },
      });

      return res.json('Error deleted');
    } catch (err) {
      console.error(err.message);
      return res.status(500).send('Server error');
    }
  },
};
