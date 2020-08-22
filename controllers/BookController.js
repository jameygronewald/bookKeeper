const express = require("express");
const router = express.Router();
const db = require("../models");
const { verifyToken } = require("../client/src/utils/tokenHelper");

router.get("/", (req, res) => {
  db.Book.find({})
    .then(bookData => {
      res.status(200).json({
        error: false,
        data: bookData,
        message: "Successfully retrieved saved books.",
      });
    })
    .catch(err => {
      res.status(500).json({
        error: true,
        data: err,
        message: "Unable to retrieve saved books.",
      });
    });
});

router.post("/", (req, res) => {
  try {
    const parsedToken = verifyToken(req.headers.auth);
    const userId = parsedToken.data;
    db.Book.create(req.body).then(bookData => {
      db.User.findOne({ _id: userId }).then(userData => {
        const userBookArray = userData.books;
        const newBook = bookData._id;
        userBookArray.push(newBook);
        const userBooksObject = { books: userBookArray };
        db.User.findOneAndUpdate({ _id: userId }, userBooksObject, {
          new: true,
          useFindAndModify: false,
        })
          .populate("books")
          .then(({ books, firstName, lastName }) => {
            const updatedUser = {
              books: books,
              firstName: firstName,
              lastName: lastName,
            };
            res.status(200).json({
              error: false,
              body: updatedUser,
              message: "Successfully saved book to collection.",
            });
          })
          .catch(err => {
            res.status(500).json({
              error: true,
              data: err,
              message: "Unable to save book to collection.",
            });
          });
      });
    });
  } catch (error) {
    console.error(error);
    res.status(401).json({
      error: true,
      data: null,
      message: "Invalid jwt",
    });
  }
});

module.exports = router;
