const router = require('express').Router();

//connects the index file with our routes
const apiRoutes = require('./api/');
const homeRoutes = require('./home-routes.js');
const dashboardRoutes = require('./dashboard-routes');
const authRoutes = require('./auth-routes');

//allows router to use those routes at the set address
router.use('/api/', apiRoutes);
router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes)
router.use('/auth', authRoutes)

//for any route call that we dont have an endpoint for
router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;