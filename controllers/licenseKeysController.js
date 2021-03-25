const db = require('../models/sql');

// Defining methods for the licenseKeysController
module.exports = {
  // @route   GET api/licenseKeys
  // @desc    Get all License Keys (kiwicodes admin only)
  // @access  Private
  findAll: async (req, res) => {
    if (req.member.role !== 'kiwicodes') {
      return res.status(400).send('Invalid permission');
    }
    try {
      const licenseKeys = await db.licenseKey.findAll();
      return res.json(licenseKeys);
    } catch (err) {
      console.error(err.message);
      return res.status(500).send('Server error');
    }
  },
  // @route   GET api/licenseKeys/:id
  // @desc    Get License Key by id (kiwicodes admin only)
  // @access  Private
  findById: async (req, res) => {
    if (req.member.role !== 'kiwicodes') {
      return res.status(400).send('Invalid permission');
    }
    try {
      const licenseKey = await db.licenseKey.findByPk(req.params.id);
      return res.json(licenseKey);
    } catch (err) {
      console.error(err.message);
      return res.status(500).send('Server error');
    }
  },
  // @route   POST api/licenseKeys
  // @desc    Create a License Key (kiwicodes admin only)
  // @access  Private
  create: async (req, res) => {
    if (req.member.role !== 'kiwicodes') {
      return res.status(400).send('Invalid permission');
    }
    const { guid, orderID, expiryDate, licenseCount, clientId } = req.body;

    const licenseKeyFeilds = {
      guid,
      orderID,
      expiryDate,
      licenseCount,
      clientId,
    };

    try {
      const licenseKey = new db.licenseKey(licenseKeyFeilds);
      await licenseKey.save();
      return res.json(licenseKey);
    } catch (err) {
      console.error(err.message);
      return res.status(500).send('Server error');
    }
  },
  // @route   PUT api/licenseKeys/:id
  // @desc    Update a License Key (kiwicodes admin only)
  // @access  Private
  update: async (req, res) => {
    if (req.member.role !== 'kiwicodes') {
      return res.status(400).send('Invalid permission');
    }
    const { guid, orderID, expiryDate, licenseCount, clientId } = req.body;

    const licenseKeyFeilds = {
      guid,
      orderID,
      expiryDate,
      licenseCount,
      clientId,
    };

    try {
      let licenseKey = await db.licenseKey.findByPk(req.params.id);

      if (licenseKey) {
        licenseKey = await licenseKey.update(licenseKeyFeilds);
        return res.json(licenseKey);
      }
    } catch (err) {
      console.error(err.message);
      return res.status(500).send('Server error');
    }
  },
  // @route   DELETE api/licenseKeys/:id
  // @desc    Delete a License Key (kiwicodes admin only)
  // @access  Private
  remove: async (req, res) => {
    try {
      if (req.member.role !== 'kiwicodes') {
        return res.status(400).send('Invalid permission');
      }
      await db.licenseKey.destroy({
        where: {
          id: req.params.id,
        },
      });

      return res.json('License Keys deleted');
    } catch (err) {
      console.error(err.message);
      return res.status(500).send('Server error');
    }
  },
};
