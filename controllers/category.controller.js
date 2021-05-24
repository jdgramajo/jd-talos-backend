const db = require('../models');
const Category = db.Category;

const getAll = (req, res) => {
  Category.findAll().then((categories) => {
    res.status(200).send({ categories });
  }).catch((err) => {
    res.status(500).send({ message: err.message });
  });
};

module.exports = { getAll }
