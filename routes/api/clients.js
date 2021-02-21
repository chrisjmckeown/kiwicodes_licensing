const router = require('express').Router();
const clientsController = require('../../controllers/clientsController');
const auth = require('../../middleware/auth');
const { check } = require('express-validator');

// Matches with "/api/clients"
router.get('/', auth, clientsController.findAll);
router.post(
  '/',
  [
    auth,
    [
      check('name', 'Name is required').not().isEmpty(),
      check('phone', 'Phone is required').not().isEmpty(),
      check('address', 'Address is required').not().isEmpty(),
      check('primaryEmail', 'Primary Email is required').not().isEmpty(),
    ],
  ],
  clientsController.create
);

// Matches with "/api/clients/:id"
router.get('/:id', auth, clientsController.findById);
router.put(
  '/:id',
  [
    auth,
    [
      check('name', 'Name is required').not().isEmpty(),
      check('phone', 'Phone is required').not().isEmpty(),
      check('address', 'Address is required').not().isEmpty(),
      check('primaryEmail', 'Primary Email is required').not().isEmpty(),
    ],
  ],
  clientsController.update
);
router.delete('/:id', auth, clientsController.remove);

module.exports = router;
