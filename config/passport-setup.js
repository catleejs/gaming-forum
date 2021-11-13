//call passport 
const passport = require('passport');

//call google strategy
const googleStrategy = require('passport-google-oauth');

//call facebook strategy
// const facebookStrategy = require('passport-facebook');

const keys = require('./keys');

const User = require('../models/User');


passport.use(
    new googleStrategy({
        //options for the strategy
        callbackURL:"/auth/google/redirect",
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret
    }, (accessToken, refreshToken, profile, done) => {
        //passport callback function
        console.log('passport function works');
        console.log(profile);
        //check if user already exists in our db
        User.findOne({
            googleId:profile.id})
            .then((currentUser)=> {
                if(currentUser) {
                    //already have the user 
                    console.log("user is " + currentUser);
                }else {
                    //create user in our db
                }
                new User({
                    username:profile.displayName,
                    googleId = profile.id
                }).save()
                .then((newUser) => {
                    console.log("new user created" + newUser);
                })
            });
        })    
);

// passport.use(
//     new facebookStrategy({

//     }), () => {
//         //passport callback function
//     }
// )

