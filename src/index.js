const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect(
    "mongodb+srv://admin:admin@twitter-oministack-mtnxj.mongodb.net/admin",
    {
        useNewUrlParser: true
    }
);

app.get('/', (req, res) => {
    return res.send('Hello Word!');
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
})