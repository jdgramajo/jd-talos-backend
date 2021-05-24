const db = require('../models');
const Book = db.Book;
const Category = db.Category;

const Op = db.Sequelize.Op;

const getAll = (req, res) => {
  Book.findAll().then((books) => {
    res.status(200).send({ books });
  }).catch((err) => {
    res.status(500).send({ message: err.message });
  });
};

const addBook = (req, res) => {
  Book.create({
    title: req.body.title
  }).then((book) => {
    if (req.body.categories && req.body.categories.length) {
      Category.findAll({
        where: {
          name: {
            [Op.or]: req.body.categories
          }
        }
      }).then((category) => {
        book.setCategories(category).then(() => {
          res.send({ message: 'Book registered successfully!' });
        });
      });
    } else {
      // sets unclasified category
      book.setCategories([0]).then(() => {
        res.send({ message: 'Book registered successfully!' });
      });
    }
  }).catch((err) => {
    res.status(500).send({ message: err.message });
  });
}

module.exports = { getAll, addBook }
