const db = require('../models/sql');
const { validationResult } = require('express-validator');

// Defining methods for the profilesController
module.exports = {
  // @route   GET api/profile/me
  // @desc    Get current member profile
  // @access  Private
  findMe: async (req, res) => {
    try {
      const profile = await db.profile.findOne({
        where: {
          memberId: req.member.id,
        },
        include: [
          {
            model: db.member,
            attributes: ['firstName', 'lastName', 'avatar'],
          },
        ],
      });

      if (!profile) {
        return res
          .status(400)
          .json({ msg: 'There is no profile for this member' });
      }
      return res.json(profile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  },
  // @route   Post api/profile
  // @desc    Create or update a user profile
  // @access  Private
  create: async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { company, website, location, status, skills, bio } = req.body;
    const profileFeilds = {};
    profileFeilds.memberId = req.member.id;
    if (company !== undefined) profileFeilds.company = company;
    if (website !== undefined) profileFeilds.website = website;
    if (location !== undefined) profileFeilds.location = location;
    if (status !== undefined) profileFeilds.status = status;
    if (skills !== undefined) profileFeilds.skills = skills;
    if (bio !== undefined) profileFeilds.bio = bio;

    console.log(profileFeilds);
    try {
      let profile = await db.profile.findOne({
        where: {
          memberId: req.member.id,
        },
      });

      if (profile) {
        profile = await profile.update(profileFeilds);
        return res.json(profile);
      }

      profile = new db.profile(profileFeilds);
      await profile.save();
      return res.json(profile);
    } catch (err) {
      console.error(err.message);
      return res.status(500).send('Server error');
    }
  },
  // @route   GET api/profile
  // @desc    Get all profiles
  // @access  Public
  findAll: async (req, res) => {
    try {
      const profiles = await db.profile.findAll({
        include: [
          {
            model: db.member,
            attributes: ['firstName', 'lastName', 'avatar'],
          },
        ],
      });
      return res.json(profiles);
    } catch (err) {
      console.error(err.message);
      return res.status(500).send('Server error');
    }
  },
  // @route   GET api/profile/member/:memberId
  // @desc    Get profile by member ID
  // @access  Public
  findById: async (req, res) => {
    try {
      const profile = await db.profile.findOne({
        where: {
          memberId: req.params.id,
        },
        include: [
          {
            model: db.member,
            attributes: ['firstName', 'lastName', 'avatar'],
          },
        ],
      });

      if (!profile) return res.status(400).json({ msg: 'Profile not found' });

      return res.json(profile);
    } catch (err) {
      console.error(err.message);

      if (err.kind == 'ObjectId')
        return res.status(400).json({ msg: 'Profile not found' });

      return res.status(500).send('Server error');
    }
  },
  // @route   DELETE api/profile
  // @desc    Delete a profile, user & posts
  // @access  Private
  remove: async (req, res) => {
    try {
      // Remove chat
      await db.chat.destroy({
        where: {
          memberId: req.member.id,
        },
      });

      // Remove profile
      await db.profile.destroy({
        where: {
          memberId: req.member.id,
        },
      });

      // Remove member
      await db.member.destroy({
        where: {
          id: req.member.id,
        },
      });

      return res.json('Member deleted');
    } catch (err) {
      console.error(err.message);
      return res.status(500).send('Server error');
    }
  },
};
