const express = require('express');

const routes = express.Router();

const TweetController = require('./controllers/TweetController');
const LikeController = require('./controllers/LikeController');
const AuthController = require('./controllers/AuthController');

routes.get('/tweets', TweetController.index);
routes.post('/tweets', TweetController.store);
routes.delete('/tweets/:id', TweetController.delete);
routes.post('/likes/:id', LikeController.store);

routes.post('/register', AuthController.store);
routes.post('/authenticate', AuthController.index);

module.exports = routes;