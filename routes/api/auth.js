const router = require('express').Router();
const authController = require('../../controllers/authController');
const auth = require('../../middleware/auth');
const { check } = require('express-validator');

// Matches with "/api/auth"
router.get('/', auth, authController.getAuthMember);
router.post(
  '/',
  [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password is required').exists(),
  ],
  authController.signIn
);

module.exports = router;
