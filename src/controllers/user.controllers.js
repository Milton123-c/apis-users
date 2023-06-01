const catchError = require('../utils/catchError');
const User = require('../models/Users');

//get all the users from the users table
const getAll = catchError(async (req, res) =>{
    const users = await User.findAll();

    return res.json(users)
});

//We create new users
const create = catchError(async (req, res) => {
    const user = req.body;
    const createUser = await User.create(user)
    return res.status(201).json(createUser);
});

//we delete a user with id
const remove = catchError(async (req, res) => {
    const {id} = req.params;
    await User.destroy({where : {id}})
    return res.sendStatus(204);
});

//we get a single user
const getUserById = catchError(async (req, res) => {
    const {id} = req.params;
    const user = await User.findByPk(id);
    return res.json(user);
});

//Update a user
const update = catchError(async (req, res) => {
    const {id} = req.params;
    const user = req.body
    const updataUser = await User.update(
        {...user},
        {where : {id}, returning: true}
    );
        console.log(req.body)
    return res.json(updataUser)
});

module.exports = {
    getAll,
    create,
    remove,
    getUserById,
    update
}