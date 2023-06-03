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
    if (!createUser) return res.status(404).json({ message: "data not fount" })

    return res.status(201).json(createUser);
});

//we delete a user with id
const remove = catchError(async (req, res) => {
    const {id} = req.params;
    const deleteUser =  await User.destroy({where : {id}})
    if (!deleteUser) return res.status(404).json({ message: "user not found" })
    return res.sendStatus(204);
});

//we get a single user
const getUserById = catchError(async (req, res) => {
    const {id} = req.params;
    const user = await User.findByPk(id);
    if (!user) return res.status(404).json({ message: "User not find" })
    return res.json(user);
});

//Update a user
const update = catchError(async (req, res) => {
    const {id} = req.params;
    const dateUser = req.body
    const updataUser = await User.update(dateUser,{where : {id}, returning: true});
    
    if (updataUser[0] === 0) return res.status(404).json({ message: "song not found" })

    return res.json(updataUser)
});

module.exports = {
    getAll,
    create,
    remove,
    getUserById,
    update
}