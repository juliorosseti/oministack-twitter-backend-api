const express        = require('express');
const authMiddleware = require('./middlewares/auth');

const routes = express.Router();

const TweetController = require('./controllers/TweetController');
const LikeController  = require('./controllers/LikeController');
const AuthController  = require('./controllers/AuthController');

// Tweets
routes.get('/tweets',        [authMiddleware, TweetController.index]);
routes.post('/tweets',       [authMiddleware, TweetController.store]);
routes.delete('/tweets/:id', [authMiddleware, TweetController.delete]);

// Like tweets
routes.post('/likes/:id',    [authMiddleware, LikeController.store]);

// User / Auth
routes.post('/register',     AuthController.store);
routes.post('/authenticate', AuthController.index);

module.exports = routes;