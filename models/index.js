const Sequelize = require('sequelize');

const { schema, user, password, connection } = require('../config/db.config');
const sequelize = new Sequelize(schema, user, password, connection );

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = require('./user.model')(sequelize, Sequelize);
db.Role = require('./role.model')(sequelize, Sequelize);

db.Category = require('./category.model')(sequelize, Sequelize);
db.Book = require('./book.model')(sequelize, Sequelize);

// Roles and users relation
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

db.ROLES = ['user', 'admin' ];

db.Category = require('./category.model')(sequelize, Sequelize);
db.Book = require('./book.model')(sequelize, Sequelize);

// Book and category relation
db.Category.belongsToMany(db.User, {
  through: 'book_categories',
  foreignKey: 'categoryId',
  otherKey: 'bookId'
});
db.Book.belongsToMany(db.Role, {
  through: 'book_categories',
  foreignKey: 'bookId',
  otherKey: 'categoryId'
});

db.CATEGORIES = [ 'fiction', 'academic', 'drama' ];

module.exports = db;
