const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect(
    "mongodb+srv://admin:admin@twitter-oministack-mtnxj.mongodb.net/admin",
    {
        useNewUrlParser: true
    }
);

app.use(require('./routes'));

app.listen(3000, () => {
    console.log('Server started on port 3000');
})