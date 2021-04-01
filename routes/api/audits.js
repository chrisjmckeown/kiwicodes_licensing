const router = require('express').Router();
const auditsController = require('../../controllers/auditsController');
const auth = require('../../middleware/auth');
const { check } = require('express-validator');

router.get('/:id', auth, auditsController.findById);
router.get('/', auth, auditsController.findBClientId);
router.get('/client/:modelId', auth, auditsController.findByClientAndModelId);
router.post(
  '/',
  // [
  //   auth,
  //   [
  check('audit', 'Audit is required').not().isEmpty(),
  check('modelId', 'Model Id is required').not().isEmpty(),
  //   ],
  // ],
  auditsController.create
);
router.delete('/:id', auth, auditsController.remove);

module.exports = router;
