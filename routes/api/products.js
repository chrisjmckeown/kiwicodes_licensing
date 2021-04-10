const router = require('express').Router();
const productsController = require('../../controllers/productsController');
const auth = require('../../middleware/auth');
const { check } = require('express-validator');

// Matches with "/api/products"
router.get('/', productsController.findAll);
router.post(
  '/',
  [
    auth,
    [
      check('name', 'Name is required').not().isEmpty(),
      check('description', 'Description is required').not().isEmpty(),
    ],
  ],
  productsController.create
);

// Matches with "/api/products/:id"
router.get('/:id', productsController.findById);
router.put(
  '/:id',
  [
    auth,
    [
      check('name', 'Name is required').not().isEmpty(),
      check('description', 'Description is required').not().isEmpty(),
    ],
  ],
  productsController.update
);
router.delete('/:id', auth, productsController.remove);

// Matches with "/api/products/byMemberId/:id"
router.get('/byMemberId/:id', auth, productsController.findByMemberId);
module.exports = router;
