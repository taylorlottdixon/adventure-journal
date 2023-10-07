const User = require('../models/user');

module.exports = {
    login,
    signup,
    create,
    authenticate,
};

function login(req, res) {
    res.render('/login', { title: 'Login' });
}

function signup(req, res) {
    res.render('/signup', { title: 'Sign Up' })
}

async function create(req, res) {
    try {
    } catch (err) {
        console.log(err)
    }
}

async function authenticate(req, res) {
    try {
    } catch (err) {
        console.log(err)
    }
}