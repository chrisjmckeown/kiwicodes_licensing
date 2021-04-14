const router = require('express').Router();
const appActivationsController = require('../../controllers/appActivationsController');
const auth = require('../../middleware/auth');

// Matches with "/api/appActivations/byClientId"
router.get('/byClientId', auth, appActivationsController.findByClientId);

// Matches with "/api/appActivations/byMemberId"
router.get('/byMemberId', auth, appActivationsController.findByMemberId);

// Matches with "/api/appActivations"
router.get('/', auth, appActivationsController.findAll);
router.post('/', auth, appActivationsController.create);

// Matches with "/api/appActivations/:id"
router.get('/:id', auth, appActivationsController.findById);
module.exports = router;
