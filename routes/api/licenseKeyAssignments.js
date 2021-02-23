const router = require('express').Router();
const licenseKeyAssignmentController = require('../../controllers/licenseKeyAssignmentController');
const auth = require('../../middleware/auth');

// Matches with "/api/licenseKeyAssignments"
router.get('/', auth, licenseKeyAssignmentController.findAll);
router.post('/', auth, licenseKeyAssignmentController.create);

// Matches with "/api/licenseKeyAssignments/client"
router.get('/client', auth, licenseKeyAssignmentController.findAllbyClient);

// Matches with "/api/licenseKeyAssignments/:id"
router.get('/:id', auth, licenseKeyAssignmentController.findById);
router.put('/:id', auth, licenseKeyAssignmentController.update);
router.delete('/:id', auth, licenseKeyAssignmentController.remove);
module.exports = router;
