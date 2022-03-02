const Favorite = require("../models/favoriteModel");

/*********************************
 *          TOC
 *  1. unsupported operation
 *  2. get all favorites
 *  3. get favoriteId
 *  4. select favoriteId
 *  5. update commentId
 *  6. delete comments
 *  7. delete commentId
 *
 *********************************/

/**
 * unsupported operations
 */

exports.unsupported = (req, res) => {
  res.statusCode = 403;
  res.end("Operation not supported");
};

/**
 * get all favorites
 */


