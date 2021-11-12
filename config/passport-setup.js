//call passport 
const passport = require('passport');

//call google strategy
const googleStrategy = require('passport-google-oauth');

//call facebook strategy
// const facebookStrategy = require('passport-facebook');

const keys = require('./keys');


passport.use(
    new googleStrategy({
        //options for the strategy
        callbackURL:"/auth/google/redirect",
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret
    }, () => {
        //passport callback function
    })
);

// passport.use(
//     new facebookStrategy({

//     }), () => {
//         //passport callback function
//     }
// )

