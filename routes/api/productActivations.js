const router = require('express').Router();
const productActivationsController = require('../../controllers/productActivationsController');
const auth = require('../../middleware/auth');

// Matches with "/api/productActivations/byClientId"
router.get('/byClientId', auth, productActivationsController.findByClientId);

// Matches with "/api/productActivations/byMemberId"
router.get('/byMemberId', auth, productActivationsController.findByMemberId);

// Matches with "/api/productActivations/check"
router.put('/check', auth, productActivationsController.checkForActivation);

// Matches with "/api/productActivations"
router.get('/', auth, productActivationsController.findAll);
router.post('/', auth, productActivationsController.create);
router.put('/', auth, productActivationsController.update);

// Matches with "/api/productActivations/:id"
router.get('/:id', auth, productActivationsController.findById);
router.put('/', auth, productActivationsController.update);
module.exports = router;
