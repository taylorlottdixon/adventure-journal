const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/user');
const System = require('../models/system');

module.exports = {
    index,
    login,
    signup,
    create,
    authenticate,
};

function login(req, res) {
    res.render('account/login', { title: 'Login' });
}

async function signup(req, res) {
    const systems = await System.find({})
    res.render('account/signup', { title: 'Sign Up', systems })
}

async function index(req, res) {
    const user = await User.findOne({username: req.body.username})
    res.render('account/manage', { title: 'My Account', user })
}

async function create(req, res) {
    try {
        // Add the user to the db
        const user = await User.create(req.body);
        // token will be a string
        const token = createJWT(user);
        // Yes, we can serialize a string
        res.json(token);
    } catch (err) {
        // Probably a dup email
        res.status(400).json(err);
    }
}   

async function authenticate(req, res) {
    try {
        // Find the user by their email address
        const user = await User.findOne({email: req.body.email});
        if (!user) throw new Error();
        // Check if the password matches
        const match = await bcrypt.compare(req.body.password, user.password);
        if (!match) throw new Error();
        res.json( createJWT(user) );
    } catch {
        res.status(400).json('Bad Credentials');
    }
}

/* Helper Functions */

function createJWT(user) {
    return jwt.sign(
      // data payload
      { user },
      process.env.SECRET,
      { expiresIn: '24h' }
    );
  }