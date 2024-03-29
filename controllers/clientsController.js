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
            [
              sequelize.literal(
                '(SELECT COUNT(*) FROM "licensekey" WHERE "licensekey"."clientId" = "client"."id")'
              ),
              'licenseKeyCount',
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
    const { name, city } = req.body;
    try {
      let client = await db.client.findOne({
        where: {
          name,
          city,
        },
      });

      if (client) {
        const {
          name,
          phone,
          address1,
          address2,
          city,
          country,
          region,
          postal,
          primaryEmail,
        } = req.body;

        const clientFeilds = {};
        if (name !== undefined) clientFeilds.name = name;
        if (phone !== undefined) clientFeilds.phone = phone;
        if (address1 !== undefined) clientFeilds.address1 = address1;
        if (address2 !== undefined) clientFeilds.address2 = address2;
        if (city !== undefined) clientFeilds.city = city;
        if (country !== undefined) clientFeilds.country = country;
        if (region !== undefined) clientFeilds.region = region;
        if (postal !== undefined) clientFeilds.postal = postal;
        if (primaryEmail !== undefined)
          clientFeilds.primaryEmail = primaryEmail;

        client = await client.update(clientFeilds);
        return res.json(client);
        // return res
        //   .status(400)
        //   .json({ errors: [{ msg: 'Client already exists' }] });
      }

      client = new db.client(req.body);
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

    const {
      name,
      phone,
      address1,
      address2,
      city,
      country,
      region,
      postal,
      primaryEmail,
    } = req.body;

    const clientFeilds = {};
    if (name !== undefined) clientFeilds.name = name;
    if (phone !== undefined) clientFeilds.phone = phone;
    if (address1 !== undefined) clientFeilds.address1 = address1;
    if (address2 !== undefined) clientFeilds.address2 = address2;
    if (city !== undefined) clientFeilds.city = city;
    if (country !== undefined) clientFeilds.country = country;
    if (region !== undefined) clientFeilds.region = region;
    if (postal !== undefined) clientFeilds.postal = postal;
    if (primaryEmail !== undefined) clientFeilds.primaryEmail = primaryEmail;

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
