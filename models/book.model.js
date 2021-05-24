module.exports = (sequelize, Sequelize) => {
  const Book = sequelize.define('book', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    title: {
      type: Sequelize.STRING
    }
  });

  return Book;
}
