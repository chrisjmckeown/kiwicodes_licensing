const router = require('express').Router();
const profilesController = require('../../controllers/profilesController');
const auth = require('../../middleware/auth');
const { check } = require('express-validator');

// Matches with "/api/profiles/me"
router.get('/me', auth, profilesController.findMe);

// Matches with "/api/profiles"
router.get('/', profilesController.findAll);
router.post(
  '/',
  [
    auth,
    [
      check('status', 'Status is required').not().isEmpty(),
      check('skills', 'Skills is required').not().isEmpty(),
    ],
  ],
  profilesController.create
);
router.delete('/', auth, profilesController.remove);

// Matches with "/api/profiles/member/:id"
router.get('/member/:id', auth, profilesController.findById);

module.exports = router;
