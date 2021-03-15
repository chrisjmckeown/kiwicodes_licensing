const db = require('../models/sql');
const { validationResult } = require('express-validator');

// Defining methods for the appChatController
module.exports = {
  // @route   GET api/appChat
  // @desc    Get all app Chat
  // @access  Public
  findAll: async (req, res) => {
    try {
      const appChats = await db.appChat.findAll();
      res.json(appChats);
    } catch (err) {
      console.error(err.message);
      return res.status(500).send('Server error');
    }
  },
  // @route   GET api/appChat/:id
  // @desc    Get app Chat by id
  // @access  Public
  findById: async (req, res) => {
    try {
      const appChat = await db.appChat.findByPk(req.params.id);
      res.json(appChat);
    } catch (err) {
      console.error(err.message);
      return res.status(500).send('Server error');
    }
  },
  // @route   POST api/appChat
  // @desc    Create a app Chat
  // @access  Private
  create: async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const member = await db.member.findByPk(req.member.id, {
      attributes: {
        exclude: ['password'],
      },
    });
    const { firstName, lastName, avatar } = member;

    const { comment, like, appId, appChatId } = req.body;

    const appChatFeilds = {
      comment,
      firstName,
      lastName,
      avatar,
      like,
      appId,
      memberId: req.member.id,
    };

    if (appChatId) appChatFeilds.appChatId = appChatId;

    try {
      const appChat = new db.appChat(appChatFeilds);
      await appChat.save();
      return res.json(appChat);
    } catch (err) {
      console.error(err.message);
      return res.status(500).send('Server error');
    }
  },
  // @route   PUT api/appChat/:id
  // @desc    Update a app Chat
  // @access  Private
  update: async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const member = await db.member.findByPk(req.member.id, {
      attributes: {
        exclude: ['password'],
      },
    });
    const { firstName, lastName, avatar } = member;

    const { comment, like, appId, appChatId } = req.body;

    const appChatFeilds = {
      comment,
      firstName,
      lastName,
      avatar,
      like,
      appId,
      memberId: req.member.id,
    };

    if (appChatId) appChatFeilds.appChatId = appChatId;

    try {
      let appChat = await db.appChat.findByPk(req.params.id);

      if (appChat) {
        appChat = await appChat.update(appChatFeilds);
        return res.json(appChat);
      }
    } catch (err) {
      console.error(err.message);
      return res.status(500).send('Server error');
    }
  },
  // @route   DELETE api/appChat/:id
  // @desc    Delete a app Chat
  // @access  Private
  remove: async (req, res) => {
    try {
      // Check member
      const appChat = await db.appChat.findByPk(req.params.id);
      if (appChat.memberId !== req.member.id) {
        return res.status(401).json({ msg: 'Member not authorized' });
      }

      // Get and delete all children chat
      const appChats = await db.appChat.findAll({
        where: {
          appChatId: req.params.id,
        },
      });
      if (appChats.length > 0) {
        appChats.forEach(async (element) => {
          await db.appChat.destroy({
            where: {
              id: element.id,
            },
          });
        });
      }

      // Delete parent chat
      await appChat.destroy();

      return res.json('App Chat deleted');
    } catch (err) {
      console.error(err.message);
      return res.status(500).send('Server error');
    }
  },
};
