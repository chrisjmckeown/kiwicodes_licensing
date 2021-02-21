const { validationResult } = require('express-validator/check');
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const db = require('../models/sql');
const jwt = require('jsonwebtoken');
const config = require('config');

// Defining methods for the membersController
module.exports = {
  // @route   GET api/members
  // @desc    Get all members (admins only)
  // @access  Private
  findAll: async (req, res) => {
    try {
      if (req.member.role !== 'kiwicodes') {
        return res.status(400).send('Invalid permission');
      }
      const members = await db.member.findAll();
      res.json(members);
    } catch (err) {
      console.error(err.message);
      return res.status(500).send('Server error');
    }
  },
  // @route   POST api/members
  // @desc    Register member
  // @access  Public
  create: async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { firstName, lastName, email, password, clientId } = req.body;
    try {
      let member = await db.member.findOne({
        where: {
          email,
        },
      });

      if (member) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Member already exists' }] });
      }

      const avatar = gravatar.url(email, {
        s: '200',
        pg: 'pg',
        d: 'mm',
      });

      member = new db.member({
        firstName,
        lastName,
        email,
        avatar,
        password,
        role: 'user',
        clientId,
      });

      const salt = await bcrypt.genSalt(10);
      member.password = await bcrypt.hash(password, salt);

      await member.save();

      const payload = {
        member: {
          id: member.id,
        },
      };

      jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: 3600 },
        (err, token) => {
          if (err) throw err;
          return res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      return res.status(500).send('Server error');
    }
  },
};
