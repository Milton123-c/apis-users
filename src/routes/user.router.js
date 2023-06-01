
const {getAll,create,remove,getUserById, update} = require('../controllers/user.controllers');
const express = require('express');

const userRouter = express.Router();

//get all the users
//we create a new user
userRouter.route('/')
    .get(getAll)
    .post(create)

//we remove a users and ubdate a user, but passing the id as a parameter
userRouter.route('/:id')
    .delete(remove)
    .get(getUserById)
    .put(update)


module.exports = userRouter;