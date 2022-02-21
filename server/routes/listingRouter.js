const express = require("express");

const listingRouter = express.Router();

listingRouter.route("/")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    next();
  })
  .get((req, res) => {
    res.end("Will send list of all listings");
  })
  .post((req, res) => {
    res.end(`Will add new listing`);
  })
  .put((req, res) => {
    res.end("PUT Operation not allowed on /listings");
  })
  .delete((req, res) => {
    res.end(`deleting listing`)
  });

module.exports = listingRouter;