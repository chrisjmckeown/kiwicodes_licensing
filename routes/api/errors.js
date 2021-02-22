const router = require('express').Router();
const errorsController = require('../../controllers/errorsController');
const auth = require('../../middleware/auth');
const { check } = require('express-validator');

// Matches with "/api/errors"
router.get('/', auth, errorsController.findAll);
router.post(
  '/',
  [
    auth,
    [
      check('message', 'Message is required').not().isEmpty(),
      check('className', 'Class Name is required').not().isEmpty(),
      check('methodName', 'Method Name is required').not().isEmpty(),
      check('buildNumber', 'Build Number is required').not().isEmpty(),
      check('revitBuild', 'Revit Build is required').not().isEmpty(),
    ],
  ],
  errorsController.create
);

// Matches with "/api/errors/:id"
router.get('/:id', auth, errorsController.findById);
router.put(
  '/:id',
  [
    auth,
    [
      check('message', 'Message is required').not().isEmpty(),
      check('className', 'Class Name is required').not().isEmpty(),
      check('methodName', 'Method Name is required').not().isEmpty(),
      check('buildNumber', 'Build Number is required').not().isEmpty(),
      check('revitBuild', 'Revit Build is required').not().isEmpty(),
    ],
  ],
  errorsController.update
);
router.delete('/:id', auth, errorsController.remove);

module.exports = router;
