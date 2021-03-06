const { authJWT } = require('../middleware');
const controller = require('../controllers/book.controller');

module.exports = (app) => {
  app.use((req, res, next) => {
    res.header(
      'Access-Control-Allow-Headers',
      'x-access-token, Origin, Content-Type, Accept'
    );
    next();
  });

  app.get(
    '/book',
    [authJWT.verifyToken],
    controller.getAll
  );

  app.post(
    '/book',
    [authJWT.verifyToken, authJWT.isAdmin],
    controller.addBook
  )
};
