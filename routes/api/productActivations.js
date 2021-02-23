const router = require('express').Router();
const productActivationsController = require('../../controllers/productActivationsController');
const auth = require('../../middleware/auth');

// Matches with "/api/productActivations"
router.get('/', auth, productActivationsController.findAll);
router.post('/', auth, productActivationsController.create);

// Matches with "/api/productActivations/:id"
router.get('/:id', auth, productActivationsController.findById);
router.put('/:id', auth, productActivationsController.update);

module.exports = router;
