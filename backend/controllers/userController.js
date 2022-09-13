const asyncHandler = require('express-async-handler');
// @desc Register a new user
// @route /api/users
// @access Public
const registerUser = asyncHandler(async(req, res) => {
    const {name, email, password} = req.body;

    //Simple validation
    if(!name || !email || !password) {
        res.status(400)
        throw new Error('Please enter all fields');
    }

    res.send("Register User");
})

// @desc Login a user
// @route /api/users/login
// @access Public
const loginUser = asyncHandler(async(req, res) => {
    res.send("Login User");
})

module.exports = {
    registerUser,
    loginUser
}