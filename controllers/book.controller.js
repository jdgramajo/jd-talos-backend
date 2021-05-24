const db = require('../models');
const Book = db.Book;

const getAll = (req, res) => {
  Book.findAll().then((books) => {
    res.status(200).send({ books });
  }).catch((err) => {
    res.status(500).send({ message: err.message });
  });
};

module.exports = { getAll }
