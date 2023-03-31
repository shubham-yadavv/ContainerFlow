const express = require('express');
const router = express.Router();

const {
    register,
    login,
    hello
} = require('../controllers/auth.controller');

const {
    getUsers,
    getUser
} = require('../controllers/user.controller');


router.post('/register', register);
router.post('/login', login);
router.get('/hello', hello);


router.get('/users', getUsers);
router.get('/users/:id', getUser);


module.exports = router;
