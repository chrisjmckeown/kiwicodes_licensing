const router = require('express').Router();
const toolsController = require('../../controllers/toolsController');
const auth = require('../../middleware/auth');
const { check } = require('express-validator');

// Matches with "/api/tools"
router.get('/', toolsController.findAll);
router.post(
  '/',
  [
    auth,
    [
      check('name', 'Name is required').not().isEmpty(),
      check('description', 'Description is required').not().isEmpty(),
    ],
  ],
  toolsController.create
);

// Matches with "/api/tools/:id"
router.get('/:id', toolsController.findById);
router.put(
  '/:id',
  [
    auth,
    [
      check('name', 'Name is required').not().isEmpty(),
      check('description', 'Description is required').not().isEmpty(),
    ],
  ],
  toolsController.update
);
router.delete('/:id', auth, toolsController.remove);

module.exports = router;
