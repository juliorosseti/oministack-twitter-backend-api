const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/twitter-api',
    {
        useNewUrlParser: true
    }
);

mongoose.Promise = global.Promise;

module.exports = mongoose;