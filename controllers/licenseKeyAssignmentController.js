const db = require('../models/sql');

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
  findAllbyClient: async (req, res) => {
    if (req.member.role === 'user') {
      return res.status(400).send('Invalid permission');
    }
    try {
      const licenseKeyAssignments = await db.licenseKeyAssignment.findAll({
        where: {
          clientId: req.member.clientId,
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
      const licenseKeyAssignment = new db.licenseKeyAssignment(
        licenseKeyAssignmentFeilds
      );
      await licenseKeyAssignment.save();
      return res.json(licenseKeyAssignment);
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
    try {
      if (req.member.role !== 'kiwicodes') {
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
