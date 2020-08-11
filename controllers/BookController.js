const express = require("express");
const router = express.Router();
const db = require("../models");

router.get('/'), (req, res) => {
    db.Book.find({})
    .then(bookData => {
        res.status(200).json({
            error: false,
            data: bookData,
            message: 'Successfully retrieved saved books.'
        });
    })
    .catch(err => {
        res.status(500).json({
            error: true,
            data: err,
            message: 'Unable to retrieve saved books.'
        })
    });
};

router.post('/', (req,res) => {
    db.Book.create(req.body)
    .then(bookData => {
        res.status(200).json({
            error: false,
            data: bookData,
            message: 'Successfully saved book to collection.'
        });
    })
    .catch(err => {
        res.status(500).json({
            error: true,
            data: err,
            message: 'Unable to save book to collection.'
        })
    });
});

module.exports = router;