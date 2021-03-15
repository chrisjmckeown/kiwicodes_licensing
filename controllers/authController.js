const db = require('../models/sql');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator/check');
const bcrypt = require('bcryptjs');
require('dotenv').config();

// Defining methods for the authController
module.exports = {
  // @route   GET api/auth
  // @desc    Test route
  // @access  Public
  getAuthMember: async (req, res) => {
    try {
      const member = await db.member.findByPk(req.member.id, {
        attributes: {
          exclude: ['password'],
        },
      });
      return res.json(member);
    } catch (err) {
      console.error(err.message);
      return res.status(500).send('Server error');
    }
  },
  // @route   POST api/auth
  // @desc    Authenticate user and get token
  // @access  Public
  signIn: async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
      let member = await db.member.findOne({
        where: {
          email,
        },
      });

      if (!member) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Invalid Credentials' }] });
      }

      const isMatch = await bcrypt.compare(password, member.password);

      if (!isMatch) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Invalid Credentials' }] });
      }
      const payload = {
        member: {
          id: member.id,
          clientId: member.clientId,
          role: member.role,
        },
      };

      jwt.sign(
        payload,
        process.env.JWT_Secret,
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
