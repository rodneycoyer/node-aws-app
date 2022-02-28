const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("./models/userModel");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const jwt = require("jsonwebtoken");
const { serializeUser } = require("passport");
require("dotenv").config();

// passport local auth strategy
// verify callback - passportLocalMongoose authenticate()
exports.verify_local = passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// generate user jwt
exports.get_jwt = user => {
  return jwt.sign(
    user,
    process.env.SECRET_KEY,
    { expiresIn: 3600 } // 1hr
  );
};

// expect user jwt in header
const options = {};
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
options.secretOrKey = process.env.SECRET_KEY;

// check with jwt-passport strategy
exports.verify_jwt = passport.use(
  new JwtStrategy(
    options,
    (jwt_payload, done) => {
      console.log('JWT payload:', jwt_payload);
      User.findOne({ _id: jwt_payload._id }, (err, user) => {
        if (err) {
          return done(err, false);
        } else if (user) {
          return done(null, user);
        } else {
          return done(null, false);
        }
      });
    }
  )
);

// verify user passport-jwt strategy
exports.verify_user = passport.authenticate("jwt", {session: false});

