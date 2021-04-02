const { validationResult } = require('express-validator');
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const db = require('../models/sql');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const nodemailer = require('nodemailer');
const generator = require('generate-password');

// Defining methods for the membersController
module.exports = {
  // @route   GET api/members
  // @desc    Get all members (kiwicodes admin only)
  // @access  Private
  findAll: async (req, res) => {
    try {
      if (req.member.role !== 'kiwicodes') {
        return res.status(400).send('Invalid permission');
      }
      const members = await db.member.findAll({
        attributes: {
          exclude: ['password'],
        },
        include: [
          {
            model: db.client,
            attributes: ['name'],
          },
        ],
      });
      return res.json(members);
    } catch (err) {
      console.error(err.message);
      return res.status(500).send('Server error');
    }
  },
  // @route   GET api/members/:id
  // @desc    Get member by id
  // @access  Private
  findById: async (req, res) => {
    try {
      const member = await db.member.findByPk(req.params.id, {
        attributes: {
          exclude: ['password'],
        },
        include: [
          {
            model: db.client,
            attributes: ['name'],
          },
        ],
      });
      return res.json(member);
    } catch (err) {
      console.error(err.message);
      return res.status(500).send('Server error');
    }
  },
  // @route   GET api/members/byClientId/:id
  // @desc    Get all members by client id
  // @access  Private
  findAllByClientId: async (req, res) => {
    try {
      if (req.member.role !== 'kiwicodes') {
        return res.status(400).send('Invalid permission');
      }
      const members = await db.member.findAll({
        where: {
          clientId: req.params.id,
        },
      });
      return res.json(members);
    } catch (err) {
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

    const { firstName, lastName, email, password, role, clientId } = req.body;
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
        role,
        clientId,
      });
      if (clientId === '0') member.clientId = null;

      const salt = await bcrypt.genSalt(10);
      member.password = await bcrypt.hash(password, salt);

      await member.save();

      member.password = '';
      return res.json({ member });
      // const payload = {
      //   member: {
      //     id: member.id,
      //   },
      // };

      // jwt.sign(
      //   payload,
      //   process.env.JWT_Secret,
      //   { expiresIn: 3600 },
      //   (err, token) => {
      //     if (err) throw err;
      //     return res.json({ token });
      //   }
      // );
    } catch (err) {
      return res.status(500).send('Server error');
    }
  },
  // @route   GET api/members/email/:email
  // @desc    Get member by email
  // @access  Private
  findByEmail: async (req, res) => {
    try {
      const member = await db.member.findOne(
        {
          where: {
            email: req.params.email,
          },
        },
        {
          attributes: {
            exclude: ['password'],
          },
        }
      );
      if (member) {
        return res.json({ found: true });
      } else {
        return res.json({ found: false });
      }
    } catch (err) {
      console.error(err.message);
      return res.status(500).send('Server error');
    }
  },
  // @route   POST api/members/resetpassword
  // @desc    Send email for member to reset password
  // @access  Public
  resetPassword: async (req, res) => {
    try {
      const { email } = req.body;
      const member = await db.member.findOne(
        {
          where: {
            email,
          },
        },
        {
          attributes: {
            exclude: ['password'],
          },
        }
      );

      if (!member) {
        return res.status(400).json({ errors: [{ msg: 'Invalid email' }] });
      }

      const memberFeilds = {};
      const password = generator.generate({
        length: 10,
        numbers: true,
      });
      const salt = await bcrypt.genSalt(10);
      memberFeilds.password = await bcrypt.hash(password, salt);

      await member.update(memberFeilds);
      const name = member.firstName + ' ' + member.lastName;
      await main(email, name, password);
      return res.json({ result: true });
    } catch (err) {
      console.error(err.message);
      return res.status(500).send('Server error');
    }
  },
  // @route   POST api/members/updatepassword
  // @desc    Update member password
  // @access  Public
  updatePassword: async (req, res) => {
    try {
      const { id, password, currentPassword } = req.body;
      const member = await db.member.findByPk(id);

      if (!member) {
        return res.status(400).json({ errors: [{ msg: 'Invalid member' }] });
      }

      const isMatch = await bcrypt.compare(currentPassword, member.password);
      if (!isMatch) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Current password does not match' }] });
      }

      const memberFeilds = {};

      const salt = await bcrypt.genSalt(10);
      memberFeilds.password = await bcrypt.hash(password, salt);

      await member.update(memberFeilds);
      return res.json({ result: true });
    } catch (err) {
      console.error(err.message);
      return res.status(500).send('Server error');
    }
  },
  // @route   PUT api/members/:id
  // @desc    Update a member
  // @access  Private
  update: async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      firstName,
      lastName,
      email,
      role,
      active,
      clientId,
      password,
    } = req.body;

    const avatar = gravatar.url(email, {
      s: '200',
      pg: 'pg',
      d: 'mm',
    });

    const memberFeilds = {};
    if (firstName) memberFeilds.firstName = firstName;
    if (lastName) memberFeilds.lastName = lastName;
    if (email) memberFeilds.email = email;
    if (role) memberFeilds.role = role;
    if (avatar) memberFeilds.avatar = avatar;
    if (active) memberFeilds.active = active;
    if (clientId) memberFeilds.clientId = clientId;
    if (password) {
      const salt = await bcrypt.genSalt(10);
      memberFeilds.password = await bcrypt.hash(password, salt);
    }

    try {
      let member = await db.member.findByPk(req.params.id);

      if (member) {
        member = await member.update(memberFeilds);
        return res.json(member);
      }
    } catch (err) {
      console.error(err.message);
      return res.status(500).send('Server error');
    }
  },
  // @route   DELETE api/members/:id
  // @desc    Delete a member
  // @access  Private
  remove: async (req, res) => {
    try {
      await db.member.destroy({
        where: {
          id: req.params.id,
        },
      });

      return res.json('Member deleted');
    } catch (err) {
      console.error(err.message);
      return res.status(500).send('Server error');
    }
  },
};

async function main(email, name, password) {
  const transporter = nodemailer.createTransport({
    host: process.env.nodemailerhost,
    port: 465,
    secure: true,
    auth: {
      user: process.env.nodemaileremail,
      pass: process.env.nodemailerpass,
    },
  });

  const info = await transporter.sendMail({
    from: `"Admin" <${process.env.nodemaileremail}>`,
    to: email,
    subject: 'Kiwi Codes Licensing - Password reset', // Subject line
    text: `
    Hello ${name}, 
    Please find below your new password. Please login and reset from "Your Account".
    ${password}
    Please find the latest build here:https://apps.autodesk.com/RVT/en/Detail/Index?id=2077603980990329161&appLang=en&os=Win64">Autodesk Exchange Apps or http://www.kiwicodes.com/attachment.php?id_attachment=92
    If you have any questions or suggestions please don’t hesitate in replying.
    Regards
    Chris Mckeown
    Director/Programmer
    ${process.env.nodemaileremail}
    www.kiwicodes.com`, // plain text body
    html: `
    <www.kiwicodes.com>Hello ${name},</www.kiwicodes.com>
    <p>Please find below your new password. Please login and reset from "Your Account".</p>
    <p>${password}</p>
    <p>Please find the latest build here: <a href="https://apps.autodesk.com/RVT/en/Detail/Index?id=2077603980990329161&appLang=en&os=Win64">Autodesk Exchange Apps</a> or <a href="http://www.kiwicodes.com/attachment.php?id_attachment=92">KiwiCodes portal</a>.</p>
    <p>If you have any questions or suggestions please don’t hesitate in replying.</p>
    <p>Regards</p>
    <p>Chris Mckeown</p>
    <p>Director/Programmer</p>
    <p>${process.env.nodemaileremail}</p>
    <p>www.kiwicodes.com</p>`, // html body
  });
  return nodemailer.getTestMessageUrl(info);
}
