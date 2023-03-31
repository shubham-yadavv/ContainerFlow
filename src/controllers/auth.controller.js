const User = require('../models/user');

const register = async (req, res) => {
    const { name, password } = req.body;

    try {

        const newUser = new User ({
            name,
            password
        })

        const savedUser = await newUser.save();

        res.status(201).json(savedUser);

    } catch (error) {
            
            res.status(500).json({ message: error.message });
    
        }
    }

const login = async (req, res) => {

    const { name, password } = req.body;

    try {

        const oldUser = await User.findOne({ name });

        if (oldUser.password !== password) return res.status(400).json({ message: "Invalid credentials" });

        res.status(200).json(oldUser);

    } catch (error) {

        res.status(500).json({ message: error.message });

    }

}


const hello = (req, res) => {
    res.send('Hello there docker!');
}


module.exports = {
    register,
    login,
    hello
}

