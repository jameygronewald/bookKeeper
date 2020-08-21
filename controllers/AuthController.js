const express = require("express");
const router = express.Router();
const db = require("../models");
const { generateToken } = require("../client/src/utils/tokenHelper");

router.post("/signup", (req, res) => {
  db.User.create(req.body)
    .then(newUserData => {
      const auth = generateToken(newUserData._id);
      const newUserObject = {
        firstName: newUserData.firstName,
        lastName: newUserData.lastName,
        books: newUserData.books,
      };
      res.status(201).json({
        error: false,
        body: { newUserObject, auth },
        message: "Successfully created new user.",
      });
    })
    .catch(err => {
      res.status(500).json({
        error: true,
        body: err,
        message: "Unable to create new user.",
      });
    });
});

router.post("/login", (req, res) => {
  const formattedEmail = req.body.email.toLowerCase();
  db.User.findOne({ email: formattedEmail })
    .populate("books")
    .then(userData => {
      if (userData.password === req.body.password) {
        const auth = generateToken(userData._id);
        const userObject = {
          firstName: userData.firstName,
          lastName: userData.lastName,
          books: userData.books,
        };
        res.status(201).json({
          error: false,
          body: { userObject, auth },
          message: "Successfully created new user.",
        });
      } else {
        throw err;
      }
    })
    .catch(err => {
      res.status(500).json({
        error: true,
        body: err,
        message: "Unable to create new user.",
      });
    });
});

module.exports = router;
