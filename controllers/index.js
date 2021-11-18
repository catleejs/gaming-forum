const router = require("express").Router();

const apiRoutes = require("./api");
const homeRoutes = require("./home-routes.js");
const authRoutes = require('./auth-routes');

router.use("/", homeRoutes);

router.use("/api", apiRoutes);
router.use('/auth', authRoutes)

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;
