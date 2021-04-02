const db = require('../models/sql');
const { validationResult } = require('express-validator');
const sequelize = require('sequelize');

// Defining methods for the clientsController
module.exports = {
  // @route   GET api/clients
  // @desc    Get all clients (kiwicodes admin only)
  // @access  Private
  findAll: async (req, res) => {
    try {
      if (req.member.role !== 'kiwicodes') {
        return res.status(400).send('Invalid permission');
      }
      const clients = await db.client.findAll({
        attributes: {
          include: [
            [
              sequelize.literal(
                '(SELECT COUNT(*) FROM "member" WHERE "member"."clientId" = "client"."id")'
              ),
              'memberCount',
            ],
          ],
        },
      });
      return res.json(clients);
    } catch (err) {
      console.error(err.message);
      return res.status(500).send('Server error');
    }
  },
  // @route   GET api/clients/:id
  // @desc    Get client by id
  // @access  Private
  findById: async (req, res) => {
    try {
      const client = await db.client.findByPk(req.params.id);
      return res.json(client);
    } catch (err) {
      console.error(err.message);
      return res.status(500).send('Server error');
    }
  },
  // @route   POST api/clients
  // @desc    Create a client
  // @access  Private
  create: async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, phone, address, primaryEmail } = req.body;

    const clientFeilds = {
      name,
      phone,
      address,
      primaryEmail,
    };

    try {
      const client = new db.client(clientFeilds);
      await client.save();
      return res.json(client);
    } catch (err) {
      console.error(err.message);
      return res.status(500).send('Server error');
    }
  },
  // @route   PUT api/clients/:id
  // @desc    Update a client
  // @access  Private
  update: async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, phone, address, primaryEmail } = req.body;

    const clientFeilds = {};
    if (name) appFeilds.name = name;
    if (phone) appFeilds.phone = phone;
    if (address) appFeilds.address = address;
    if (primaryEmail) appFeilds.primaryEmail = primaryEmail;

    try {
      let client = await db.client.findByPk(req.params.id);

      if (client) {
        client = await client.update(clientFeilds);
        return res.json(client);
      }
    } catch (err) {
      console.error(err.message);
      return res.status(500).send('Server error');
    }
  },
  // @route   DELETE api/clients/:id
  // @desc    Delete a client
  // @access  Private
  remove: async (req, res) => {
    try {
      await db.client.destroy({
        where: {
          id: req.params.id,
        },
      });

      return res.json('Client deleted');
    } catch (err) {
      console.error(err.message);
      return res.status(500).send('Server error');
    }
  },
};
