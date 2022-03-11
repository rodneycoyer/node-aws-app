const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("./models/userModel");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const jwt = require("jsonwebtoken");
require("dotenv").config();

// passport local auth strategy
// verify callback - passportLocalMongoose authenticate()
exports.verify_local = passport.use(new LocalStrategy(User.authenticate()));
// store req.body object
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// generate jwt
exports.get_jwt = user => {
  return jwt.sign(user, process.env.SECRET_KEY, { expiresIn: 3600 }); // 1hr
};

// expect jwt in header
const options = {};
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
options.secretOrKey = process.env.SECRET_KEY;

// check for jwt
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

// verify & authenticate user - passport-jwt strategy
exports.verify_user = passport.authenticate("jwt", { session: false });

// verify if admin
exports.verify_admin = (req, res, next) => {
  if (req.user.admin) {
    return next();
  } else {
    const err = new Error("You are not authorized for this!");
    err.status = 403;
    return next(err);
  }
};