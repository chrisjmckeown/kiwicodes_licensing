const router = require('express').Router();
const toolActivationsController = require('../../controllers/toolActivationsController');
const auth = require('../../middleware/auth');

// Matches with "/api/toolActivations"
router.get('/', auth, toolActivationsController.findAll);
router.post('/', auth, toolActivationsController.create);

// Matches with "/api/toolActivations/:id"
router.get('/:id', auth, toolActivationsController.findById);
router.put('/:id', auth, toolActivationsController.update);

module.exports = router;
