const db = require('../models/mongo');
const { validationResult } = require('express-validator');

// Defining methods for the auditsController
module.exports = {
  // @route   GET api/audits/:auditId
  // @desc    Get an audit by id
  // @access  Private
  findById: async (req, res) => {
    try {
      const audit = await db.Audit.findOne({
        _id: req.params.id,
        clientId: req.member.clientId,
      });
      if (!audit) return res.status(400).json({ msg: 'No Audit found' });

      return res.json(audit);
    } catch (err) {
      console.error(err.message);
      return res.status(500).send('Server error');
    }
  },
  // @route   GET api/audits/client
  // @desc    Get all audits for a client
  // @access  Private
  findBClientId: async (req, res) => {
    try {
      const audits = await db.Audit.find({
        clientId: req.member.clientId,
      });

      if (audits.length === 0)
        return res.status(400).json({ msg: 'No Audits found' });

      return res.json(audits);
    } catch (err) {
      console.error(err.message);
      return res.status(500).send('Server error');
    }
  },
  // @route   GET api/audits/client/:modelId
  // @desc    Get all audits for a client and model
  // @access  Private
  findByClientAndModelId: async (req, res) => {
    try {
      const audits = await db.Audit.find({
        clientId: req.member.clientId,
        modelId: req.params.modelId,
      });

      if (audits.length === 0)
        return res.status(400).json({ msg: 'No Audits found' });

      return res.json(audits);
    } catch (err) {
      console.error(err.message);
      return res.status(500).send('Server error');
    }
  },
  // @route   POST api/audits
  // @desc    Create an audit
  // @access  Private
  create: async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { audit, modelId, memberId, clientId } = req.body;

    const auditFeilds = {
      audit,
      memberId,
      modelId,
      clientId,
    };

    try {
      const audit = new db.Audit(auditFeilds);
      await audit.save();
      return res.json(audit);
    } catch (err) {
      console.error(err.message);
      return res.status(500).send('Server error');
    }
  },
  // @route   DELETE api/audits/:auditId
  // @desc    Delete an audit
  // @access  Private
  remove: async (req, res) => {
    try {
      await db.Audit.deleteOne({ _id: req.params.id });

      return res.json('Audit deleted');
    } catch (err) {
      console.error(err.message);
      return res.status(500).send('Server error');
    }
  },
};
