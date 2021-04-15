const router = require('express').Router();
const licenseKeyAssignmentController = require('../../controllers/licenseKeyAssignmentController');
const auth = require('../../middleware/auth');

// Matches with "/api/licenseKeyAssignments"
router.get('/', auth, licenseKeyAssignmentController.findAll);
router.post('/', auth, licenseKeyAssignmentController.create);

// Matches with "/api/licenseKeyAssignments/:id"
router.get('/:id', auth, licenseKeyAssignmentController.findById);
router.put('/:id', auth, licenseKeyAssignmentController.update);
router.delete('/:id', auth, licenseKeyAssignmentController.remove);

// Matches with "/api/licenseKeyAssignments/byLicenseKeyId/:licenseKeyId"
router.get(
  '/byLicenseKeyId/:licenseKeyId',
  auth,
  licenseKeyAssignmentController.findAllbyLicenseKeyId
);

// Matches with "/api/licenseKeyAssignments/byClientIdLicenseKeyId/:licenseKeyId"
router.get(
  '/byClientIdLicenseKeyId/:licenseKeyId',
  auth,
  licenseKeyAssignmentController.findAllbyClientIdLicenseKeyId
);

// Matches with "/api/licenseKeyAssignments/:licenseKeyId/:memberId"
router.get(
  '/:licenseKeyId/:memberId',
  auth,
  licenseKeyAssignmentController.findAllbyLicenseKeyIdMemberId
);
module.exports = router;
