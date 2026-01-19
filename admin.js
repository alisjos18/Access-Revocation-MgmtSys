const express = require('express');
const router = express.Router();
const User = require('./user');
const auth = require('./authmiddle');

router.get('/users', auth, async (req, res) => {
    if (req.user.role !== 'ADMIN') return res.status(403).send("No.");
    const users = await User.find({ role: 'USER' }).select('-password');
    res.send(users);
});

router.post('/toggle', auth, async (req, res) => {
    if (req.user.role !== 'ADMIN') return res.status(403).send("No.");
    const user = await User.findById(req.body.userId);
    user.hasAccess = !user.hasAccess;
    await user.save();
    res.send({ newStatus: user.hasAccess });
});


module.exports = router;
