const express = require("express");
const router = express.Router();
const db = require("../models");

router.post("/signup", (req, res) => {
  console.log(req.body);
  db.User.create(req.body)
    .then(newUserData => {
      res.status(201).json({
        error: false,
        body: newUserData,
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
  console.log(req.body);
  db.User.findOne({email: req.body.email})
    .then(userData => {
      res.status(201).json({
        error: false,
        body: userData,
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

module.exports = router;
