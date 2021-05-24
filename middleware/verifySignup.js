const db = require("../models");
const ROLES = db.ROLES;
const User = db.User;

const checkDuplicateEmail = (req, res, next) => {
  User.findOne({
    where: {
      email: req.body.email
    }
  }).then(user => {
    if (user) {
      res.status(422).send({
        message: "Error: Email taken"
      });
      return;
    }

    next();
  });
};

const checkRoles = (req, res, next) => {
  if (req.body.roles) {
    req.body.roles.map((role) => {
      if (!ROLES.includes(role)) {
        res.status(422).send({
          message: `Error: Role ${role} is not valid`
        });
        return;
      }
    })
  }
  
  next();
};

module.exports = {
  checkDuplicateEmail,
  checkRoles
};
