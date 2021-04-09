const db = require('../models/sql');
const sequelize = require('sequelize');
const Op = sequelize.Op;

// Defining methods for the licenseKeyAssignmentController
module.exports = {
  // @route   GET api/
  // @desc    Get all License Keys Assignment (kiwicodes admin only)
  // @access  Private
  findAll: async (req, res) => {
    if (req.member.role !== 'kiwicodes') {
      return res.status(400).send('Invalid permission');
    }
    try {
      const licenseKeyAssignments = await db.licenseKeyAssignment.findAll();
      return res.json(licenseKeyAssignments);
    } catch (err) {
      console.error(err.message);
      return res.status(500).send('Server error');
    }
  },
  // @route   GET api/
  // @desc    Get all License Keys Assignments by client Id (admin only)
  // @access  Private
  findAllbyClientIdLicenseKeyId: async (req, res) => {
    if (req.member.role === 'user') {
      return res.status(400).send('Invalid permission');
    }
    try {
      const licenseKeyAssignments = await db.member.findAll({
        attributes: ['id', 'firstName', 'lastName'],
        where: {
          clientId: req.params.clientId,
        },
        include: [
          {
            model: db.licenseKeyAssignment,
            // attributes: ['id', 'licenseKeyId'],
            where: {
              licenseKeyId: req.params.licenseKeyId,
            },
            required: false,
          },
        ],
      });
      return res.json(licenseKeyAssignments);
    } catch (err) {
      return res.status(500).send('Server error');
    }
  },
  // @route   GET api/
  // @desc    Get all License Keys Assignments by client Id (admin only)
  // @access  Private
  findAllbyLicenseKeyId: async (req, res) => {
    if (req.member.role === 'user') {
      return res.status(400).send('Invalid permission');
    }
    try {
      const licenseKeyAssignments = await db.licenseKeyAssignment.findAll({
        where: {
          licenseKeyId: req.params.licenseKeyId,
        },
      });
      return res.json(licenseKeyAssignments);
    } catch (err) {
      console.error(err.message);
      return res.status(500).send('Server error');
    }
  },
  // @route   GET api/
  // @desc    Get all License Keys Assignments by License Key Id and Member Id (admin only)
  // @access  Private
  findAllbyLicenseKeyIdMemberId: async (req, res) => {
    if (req.member.role === 'user') {
      return res.status(400).send('Invalid permission');
    }
    try {
      const licenseKeyAssignments = await db.licenseKeyAssignment.findAll({
        where: {
          licenseKeyId: req.params.licenseKeyId,
          memberId: req.params.memberId,
        },
      });
      return res.json(licenseKeyAssignments);
    } catch (err) {
      console.error(err.message);
      return res.status(500).send('Server error');
    }
  },
  // @route   GET api/licenseKeyAssignments/:id
  // @desc    Get License Key Assignment by id (kiwicodes admin only)
  // @access  Private
  findById: async (req, res) => {
    if (req.member.role !== 'kiwicodes') {
      return res.status(400).send('Invalid permission');
    }
    try {
      const licenseKeyAssignment = await db.licenseKeyAssignment.findByPk(
        req.params.id
      );
      return res.json(licenseKeyAssignment);
    } catch (err) {
      console.error(err.message);
      return res.status(500).send('Server error');
    }
  },
  // @route   POST api/licenseKeyAssignments
  // @desc    Create a License Key Assignment
  // @access  Private
  create: async (req, res) => {
    const { licenseKeyId, memberId, clientId } = req.body;

    const licenseKeyAssignmentFeilds = {
      licenseKeyId,
      memberId,
      clientId,
    };

    try {
      // check lisense key activation count
      const licenseKeyAssignments = await db.licenseKeyAssignment.findAll({
        where: {
          licenseKeyId,
        },
      });
      const licenseKey = await db.licenseKey.findByPk(licenseKeyId);
      const canLicense =
        licenseKeyAssignments.length >= licenseKey.licenseCount ? false : true;
      if (canLicense) {
        const licenseKeyAssignment = new db.licenseKeyAssignment(
          licenseKeyAssignmentFeilds
        );
        await licenseKeyAssignment.save();
        return res.json(licenseKeyAssignment);
      } else {
        return res
          .status(400)
          .json({ errors: [{ msg: 'All licenses are assigned.' }] });
      }
    } catch (err) {
      console.error(err.message);
      return res.status(500).send('Server error');
    }
  },
  // @route   PUT api/licenseKeyAssignments/:id
  // @desc    Update License Key Assignment, Release Date
  // @access  Private
  update: async (req, res) => {
    const { releaseDate } = req.body;
    const licenseKeyAssignmentFeilds = {};
    if (releaseDate !== undefined)
      licenseKeyAssignmentFeilds.releaseDate = releaseDate;

    try {
      let licenseKeyAssignment = await db.licenseKeyAssignment.findByPk(
        req.params.id
      );

      if (licenseKeyAssignment) {
        licenseKeyAssignment = await licenseKeyAssignment.update(
          licenseKeyAssignmentFeilds
        );
        return res.json(licenseKeyAssignment);
      }
    } catch (err) {
      console.error(err.message);
      return res.status(500).send('Server error');
    }
  },
  // @route   DELETE api/licenseKeyAssignments/:id
  // @desc    Delete a License Key Assignment (kiwicodes admin only)
  // @access  Private
  remove: async (req, res) => {
    console.log('here');
    try {
      if (req.member.role === 'user') {
        return res.status(400).send('Invalid permission');
      }
      await db.licenseKeyAssignment.destroy({
        where: {
          id: req.params.id,
        },
      });

      return res.json('License Key Assignment deleted');
    } catch (err) {
      console.error(err.message);
      return res.status(500).send('Server error');
    }
  },
};
