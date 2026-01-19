const express = require('express');
const router = express.Router();
const User = require('./user');
const jwt = require('jsonwebtoken');

router.post('/register', async (req, res) => {
    const { username, password, role } = req.body;
    const user = new User({ username, password: password, role });
    await user.save();
    res.send({ msg: "done" });
});

router.post('/login', async (req, res) => {
    const user = await User.findOne({ username: req.body.username });
    if (!user || req.body.password !== user.password) {
        return res.status(401).send("fail");
    }
    //const token = jwt.sign({ _id: user._id, role: user.role }, process.env.JWT_SECRET);
    res.send({ token, role: user.role });
});


module.exports = router;


