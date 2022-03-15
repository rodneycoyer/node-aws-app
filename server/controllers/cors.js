const cors = require("cors");

const whiteList = ["http://localhost:3000"];

const corsOptionsDelegate = (req, callback) => {
  let corsOptions;
  console.log(req.header("Origin"));
  if (whiteList.indexOf(req.header("Origin")) !== -1) {
    corsOptions = { origin: true };
  }
  else {
    corsOptions = { origin: false };
  }
  callback(null, corsOptions);
};

// allow for all origins
exports.cors = cors();

// check whitelist
exports.corsWithOptions = cors(corsOptionsDelegate);