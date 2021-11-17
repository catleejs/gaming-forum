<<<<<<< HEAD
const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const passportSetup = require('./config/passport-setup');
//imports helpers
const helpers = require('./utils/helpers');
//imports our .env that is using dotenv
require('dotenv').config();

=======
const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");

require("dotenv").config();
>>>>>>> develop

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const sess = {
<<<<<<< HEAD
  secret: process.env.secret,
=======
  secret: process.env.Sequelize_Secret,
>>>>>>> develop
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

<<<<<<< HEAD
const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
=======
const hbs = exphbs.create({});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
>>>>>>> develop


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

<<<<<<< HEAD
//connect to mongodb
// mongoose.connect(keys.mongodb.dbURI, () => {
//   console.log("connected to mongodb");
// })


// app.use(require('./controllers/'));
=======
app.use(require("./controllers/"));
>>>>>>> develop

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
