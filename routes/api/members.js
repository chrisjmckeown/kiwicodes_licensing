const router = require('express').Router();
const membersController = require('../../controllers/membersController');
const auth = require('../../middleware/auth');
const { check } = require('express-validator');

// Matches with "/api/members/byClientId"
router.get('/byClientId', auth, membersController.findByClientId);

router.post('/resetpassword', membersController.resetPassword);
router.post('/updatepassword', auth, membersController.updatePassword);

// Matches with "/api/members"
router.get('/', auth, membersController.findAll);
router.post(
  '/',
  [
    check('email', 'Please include a valid email').isEmail(),
    check(
      'password',
      'Please include a password with 6 ort more characters'
    ).isLength({ min: 6 }),
  ],
  membersController.create
);

// Matches with "/api/members/:id"
router.get('/:id', auth, membersController.findById);
router.get('/email/:email', membersController.findByEmail);
router.put('/:id', auth, membersController.update);
router.delete('/:id', auth, membersController.remove);

module.exports = router;
