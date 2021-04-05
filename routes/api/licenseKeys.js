const router = require('express').Router();
const licenseKeysController = require('../../controllers/licenseKeysController');
const auth = require('../../middleware/auth');

// Matches with "/api/licenseKeys"
router.get('/', auth, licenseKeysController.findAll);
router.post('/', auth, licenseKeysController.create);

// Matches with "/api/licenseKeys/:id"
router.get('/:id', auth, licenseKeysController.findById);
router.put('/:id', auth, licenseKeysController.update);
router.delete('/:id', auth, licenseKeysController.remove);
router.get('/byClientId/:id', auth, licenseKeysController.findAllByClientId);

module.exports = router;
