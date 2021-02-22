const router = require('express').Router();
const appsController = require('../../controllers/appsController');
const auth = require('../../middleware/auth');
const { check } = require('express-validator');

// Matches with "/api/apps"
router.get('/', appsController.findAll);
router.post(
  '/',
  [
    auth,
    [
      check('name', 'Name is required').not().isEmpty(),
      check('number', 'Number is required').not().isEmpty(),
      check('description', 'Description is required').not().isEmpty(),
      check('helpLink', 'Help Link is required').not().isEmpty(),
    ],
  ],
  appsController.create
);

// Matches with "/api/apps/:id"
router.get('/:id', appsController.findById);
router.put(
  '/:id',
  [
    auth,
    [
      check('name', 'Name is required').not().isEmpty(),
      check('number', 'Number is required').not().isEmpty(),
      check('description', 'Description is required').not().isEmpty(),
      check('helpLink', 'Help Link is required').not().isEmpty(),
    ],
  ],
  appsController.update
);
router.delete('/:id', auth, appsController.remove);

module.exports = router;
