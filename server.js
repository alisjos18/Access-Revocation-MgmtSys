require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI);

app.use('/auth', require('./auth'));
app.use('/admin', require('./admin'));

app.get('/status', require('./authmiddle'), async (req, res) => {
    const user = await (require('./user')).findById(req.user._id);
    res.send({ hasAccess: user.hasAccess });
});

const path = require('path');
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(process.env.PORT || 5000);