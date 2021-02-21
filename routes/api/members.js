const router = require('express').Router();
const membersController = require('../../controllers/membersController');
const auth = require('../../middleware/auth');
const { check } = require('express-validator');

// Matches with "/api/members"
router.get('/', auth, membersController.findAll);
router.post(
  '/',
  [
    check('firstName', 'First Name is required').not().isEmpty(),
    check('lastName', 'Last Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check(
      'password',
      'Please include a password with 6 ort more characters'
    ).isLength({ min: 6 }),
    check('clientId', 'Please include a client Id').not().isEmpty(),
  ],
  membersController.create
);

module.exports = router;
