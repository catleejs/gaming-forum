
// const passport = require('passport');

// const router = require('express').Router();


//auth login 
// chase commented out
// router.get('/login',(req,res) => {
//     res.render('login')
// });

//auth logout
// chase commented out
// router.get('/logout', (req,res) => {
//     //handle with passport 
//     res.send('logging out ')
// });

//auth with google 
// chase commented out
// router.get('/google', passport.authenticate('google', {
//     scope:['https://www.googleapis.com/auth/plus.login']
// }));

// GET /auth/google/callback
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  If authentication fails, the user will be redirected back to the
//   login page.  Otherwise, the primary route function function will be called,
//   which, in this example, will redirect the user to the home page.

// chase commented out
// router.get('/auth/google/callback', 
//   passport.authenticate('google', { failureRedirect: '/login' }),
//   function(req, res) {
//     res.redirect('/');
//   });


//callback route for google to redirect to
// router.get('/google/redirect', passport.authenticate('google'),(req,res) => {
//     res.send('you reached the callback uri')
// })


// module.exports = router;