//call passport 
const passport = require('passport');

//call google strategy
const googleStrategy = require('passport-google-oauth').OAuth2Strategy;;

//call facebook strategy
// const facebookStrategy = require('passport-facebook');

//requiring keys.js and the user model
const keys = require('./keys');
// const User = require('../models/User');

//serializing our data for a cookie 
// passport.serializeUser((user,done )=> {
//     done(null,user.id);
// })


passport.use(
    new googleStrategy({
        //options for the strategy
        callbackURL:"/auth/google/redirect",
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret
    }, (token, secretToken, profile, done) => {
        //passport callback function
        console.log('passport function works');
        console.log(profile);
        User.findOrCreate({ googleId: profile.id }, function (err, user) {
            return done(err, user);
          });
        //check if user already exists in our db
        // User.findOne({
        //     googleId:profile.id})
        //     .then((currentUser)=> {
        //         if(currentUser) {
        //             //already have the user 
        //             console.log("user is " + currentUser);
        //             //calling the done method from serialize
        //             done(null,currentUser);
        //         }else {
        //             //create user in our db
        //         }
        //         new User({
        //             username:profile.displayName,
        //             googleId = profile.id
        //         }).save()
        //         .then((newUser) => {
        //             console.log("new user created" + newUser);
        //             //calling the done method from serialize
        //             done(null,newUser);
        //         })
        //     });
        })    
);

// passport.use(
//     new facebookStrategy({

//     }), () => {
//         //passport callback function
//     }
// )

