const express = require("express");
const router = express.Router();
const db = require("../models");
const { verifyToken } = require("../client/src/utils/tokenHelper");

router.get("/api/user", (req, res) => {
  const parsedToken = verifyToken(req.headers.auth);
  const userId = parsedToken.data;
  db.User.findOne({ _id: userId })
    .populate("books")
    .then(({ firstName, lastName, books }) => {
      const userData = {
        firstName: firstName,
        lastName: lastName,
        books: books,
      };
      res.status(200).json({
        error: false,
        body: userData,
        message: "Successfully retrieved user's library.",
      });
    })
    .catch(err => {
      res.status(500).json({
        error: true,
        body: err,
        message: "Unable to retrieve user's library.",
      });
    });
});

module.exports = router;
