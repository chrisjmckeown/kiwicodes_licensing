const db = require('../models/sql');

// Defining methods for the appActivationsController
module.exports = {
  // @route   GET api/appActivations
  // @desc    Get all app activations
  // @access  Private
  findAll: async (req, res) => {
    try {
      const appActivations = await db.appActivation.findAll({
        include: [
          {
            model: db.app,
            attributes: ['name'],
          },
          {
            model: db.member,
            attributes: ['firstName', 'lastName'],
            include: [
              {
                model: db.client,
                attributes: ['id', 'name'],
              },
            ],
          },
        ],
      });
      return res.json(appActivations);
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
      const appActivation = await db.appActivation.findByPk(req.params.id);
      return res.json(appActivation);
    } catch (err) {
      console.error(err.message);
      return res.status(500).send('Server error');
    }
  },
  // @route   GET api/appActivations/byClientId/:id
  // @desc    Get all app activations by Client Id
  // @access  Private
  findByClientId: async (req, res) => {
    try {
      const appActivations = await db.appActivation.findAll({
        include: [
          {
            model: db.app,
            attributes: ['name'],
          },
          {
            model: db.member,
            attributes: ['firstName', 'lastName'],
            include: [
              {
                model: db.client,
                attributes: ['id', 'name'],
                where: {
                  id: parseInt(req.member.clientId),
                },
              },
            ],
          },
        ],
      });
      return res.json(appActivations);
    } catch (err) {
      console.error(err.message);
      return res.status(500).send('Server error');
    }
  },
  // @route   GET api/appActivations/byMemberId/:id
  // @desc    Get all app activations by Member Id
  // @access  Private
  findByMemberId: async (req, res) => {
    try {
      const appActivations = await db.appActivation.findAll({
        include: [
          {
            model: db.app,
            attributes: ['name'],
          },
          {
            model: db.member,
            attributes: ['firstName', 'lastName'],
            where: {
              id: parseInt(req.member.id),
            },
            include: [
              {
                model: db.client,
                attributes: ['id', 'name'],
              },
            ],
          },
        ],
      });
      return res.json(appActivations);
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
