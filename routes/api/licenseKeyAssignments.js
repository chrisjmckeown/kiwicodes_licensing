const router = require('express').Router();
const licenseKeyAssignmentController = require('../../controllers/licenseKeyAssignmentController');
const auth = require('../../middleware/auth');

// Matches with "/api/licenseKeyAssignment"
router.get('/', auth, licenseKeyAssignmentController.findAll);
router.post('/', auth, licenseKeyAssignmentController.create);

// Matches with "/api/licenseKeyAssignment/:id"
router.get('/:id', auth, licenseKeyAssignmentController.findById);
router.put('/:id', auth, licenseKeyAssignmentController.update);
router.delete('/:id', auth, licenseKeyAssignmentController.remove);

module.exports = router;
