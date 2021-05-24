const Sequelize = require('sequelize');

const { schema, user, password, connection } = require('../config/db.config');
const sequelize = new Sequelize(schema, user, password, connection );

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Roles and users relation
db.User = require('./user.model')(sequelize, Sequelize);
db.Role = require('./role.model')(sequelize, Sequelize);

db.Role.belongsToMany(db.User, {
  through: 'user_roles',
  foreignKey: 'roleId',
  otherKey: 'userId'
});
db.User.belongsToMany(db.Role, {
  through: 'user_roles',
  foreignKey: 'userId',
  otherKey: 'roleId'
});

db.ROLES = [ 'user', 'admin' ];

// Book and category relation
db.Category = require('./category.model')(sequelize, Sequelize);
db.Book = require('./book.model')(sequelize, Sequelize);

db.Category.belongsToMany(db.Book, {
  through: 'book_categories',
  foreignKey: 'categoryId',
  otherKey: 'bookId'
});
db.Book.belongsToMany(db.Category, {
  through: 'book_categories',
  foreignKey: 'bookId',
  otherKey: 'categoryId'
});

db.CATEGORIES = [ 'unclassified', 'fiction', 'fantasy', 'novel' ];

module.exports = db;
