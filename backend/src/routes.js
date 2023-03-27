const express = require('express');

const SchedulerController = require('./controllers/SchedulerController');
const UserController = require('./controllers/UserController');
const SessionController = require('./controllers/SessionController');
const ProfileController = require('./controllers/ProfileController');

const routes = express.Router();

routes.post('/scheduler', SchedulerController.create);
routes.get('/scheduler', SchedulerController.index);
routes.delete('/scheduler/:id', SchedulerController.delete);
//routes.put('/scheduler/:id', SchedulerController.edit);

routes.post('/register', UserController.create);
routes.get('/register', UserController.index);
//routes.delete('/user/:id', UserController.delete);
//routes.put('/user/:id', UserController.edit);

routes.post('/session', SessionController.create);

routes.get('/profile', ProfileController.index);

module.exports = routes;
