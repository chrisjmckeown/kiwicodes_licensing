const router = require('express').Router();
const buildsController = require('../../controllers/buildsController');
const auth = require('../../middleware/auth');
const { check } = require('express-validator');

// Matches with "/api/builds"
router.get('/', buildsController.findAll);
router.post(
  '/',
  [
    auth,
    [
      check('buildNumber', 'Build Number is required').not().isEmpty(),
      check('comments', 'Comments is required').not().isEmpty(),
      check('updates', 'Updates is required').not().isEmpty(),
    ],
  ],
  buildsController.create
);

// Matches with "/api/builds/:id"
router.get('/:id', buildsController.findById);
router.put(
  '/:id',
  [
    auth,
    [
      check('buildNumber', 'Build Number is required').not().isEmpty(),
      check('comments', 'Comments is required').not().isEmpty(),
      check('updates', 'Updates is required').not().isEmpty(),
    ],
  ],
  buildsController.update
);

module.exports = router;
