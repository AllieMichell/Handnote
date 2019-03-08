const userModel = require('../models/user');

const userController = {};

// USER CRUD
/** @CREATE new user */
userController.newUser = (req, res) => {
  const newUser = new userModel({
    name: req.body.name,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  });
  newUser.save((err, User) => {
    if (err) {
      return res.status(400).json({
        status: false,
        message: 'Couldn´t save new user',
        err
      });
    }
    return res.status(200).json({
      status: true,
      message: 'Successfully save new user',
      User
    });
  });
};
/** @READ get all the list of users */
userController.userList = (req, res) => {
  userModel.find({}).exec((err, Users) => {
    if (err) {
      res.status(400).json({
        status: false,
        message: 'Could´t get list of users',
        err
      });
    }
    res.status(200).json({
      status: true,
      message: 'Successfully get list of users',
      Users
    });
  });
};
module.exports = userController;
