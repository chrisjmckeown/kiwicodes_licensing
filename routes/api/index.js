const router = require('express').Router();

// router.use('/api/appActivations', require('./appActivations'));
// router.use('/api/appChat', require('./appChat'));
// router.use('/api/apps', require('./apps'));
// router.use('/api/audits', require('./audits'));
router.use('/api/auth', require('./auth'));
// router.use('/api/builds', require('./builds'));
// router.use('/api/clients', require('./clients'));
// router.use('/api/errors', require('./errors'));
// router.use('/api/licenseKeyAssignments', require('./licenseKeyAssignments'));
// router.use('/api/licenseKeys', require('./licenseKeys'));
// router.use('/api/members', require('./members'));
// router.use('/api/profile', require('./profile'));
// router.use('/api/toolActivations', require('./toolActivations'));
// router.use('/api/tools', require('./tools'));

module.exports = router;
