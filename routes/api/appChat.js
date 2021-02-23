const router = require('express').Router();
const appChatController = require('../../controllers/appChatController');
const auth = require('../../middleware/auth');
const { check } = require('express-validator');

// Matches with "/api/appChat"
router.get('/', appChatController.findAll);
router.post(
  '/',
  [auth, [check('comment', 'Comment is required').not().isEmpty()]],
  appChatController.create
);

// Matches with "/api/appChat/:id"
router.get('/:id', appChatController.findById);
router.put(
  '/:id',
  [auth, [check('comment', 'Comment is required').not().isEmpty()]],
  appChatController.update
);
router.delete('/:id', auth, appChatController.remove);

module.exports = router;
