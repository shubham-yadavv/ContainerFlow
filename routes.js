const User = require('./user');
const express = require('express');

const router = express.Router();

router.post('/user', async (req, res) => {
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
)

router.get('/user', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
        
    } catch (error) {
        res.status(500).json({ message: error.message });
        
    }
}
)


router.get('/', (req, res) => {
    res.send('Hello there docker!');
    }
)

module.exports = router;
