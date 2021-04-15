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
      const licenseKeys = await db.licenseKey.findAll({
        include: [
          {
            model: db.client,
            attributes: ['name'],
          },
          {
            model: db.product,
            attributes: ['name'],
          },
        ],
      });
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
  // @route   GET api/licenseKeys/byClientId
  // @desc    Get all licenseKeys by client id
  // @access  Private
  findByClientId: async (req, res) => {
    try {
      if (req.member.role === 'user') {
        return res.status(400).send('Invalid permission');
      }
      const licenseKeys = await db.licenseKey.findAll({
        where: {
          clientId: parseInt(req.member.clientId),
        },
        include: [
          {
            model: db.client,
            attributes: ['name'],
          },
          {
            model: db.product,
            attributes: ['name'],
          },
        ],
      });
      return res.json(licenseKeys);
    } catch (err) {
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
    const {
      guid,
      orderID,
      expiryDate,
      licenseCount,
      clientId,
      productId,
    } = req.body;

    const licenseKeyFeilds = {
      guid,
      orderID,
      expiryDate,
      licenseCount,
      clientId,
      productId,
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
    const {
      guid,
      orderID,
      expiryDate,
      licenseCount,
      clientId,
      productId,
    } = req.body;

    const licenseKeyFeilds = {};
    if (guid !== undefined) licenseKeyFeilds.guid = guid;
    if (orderID !== undefined) licenseKeyFeilds.orderID = orderID;
    if (expiryDate !== undefined) licenseKeyFeilds.expiryDate = expiryDate;
    if (licenseCount !== undefined)
      licenseKeyFeilds.licenseCount = licenseCount;
    if (clientId !== undefined) licenseKeyFeilds.clientId = clientId;
    if (productId !== undefined) licenseKeyFeilds.productId = productId;

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
