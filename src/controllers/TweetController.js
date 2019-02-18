const Tweet = require('../models/Tweet');

module.exports = {
    async index(req, res) {
        const tweets = await Tweet.find({}).sort('-createAt');

        return res.json(tweets);
    },

    async store(req, res) {
        const tweet = await Tweet.create(req.body);

        req.io.emit('tweet', tweet);

        return res.json(tweet);
    },

    async delete(req, res) {
        const tweet = await Tweet.findByIdAndDelete(req.params.id);

        req.io.emit('deleted');

        return res.json(tweet);
    }
};