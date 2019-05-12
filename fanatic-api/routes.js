var IndexController = require('./controllers/indexController');
var LoginController = require('./controllers/loginController');
var AccountController = require('./controllers/accountController');
var PlayerController = require('./controllers/playerController');
var WorldController = require('./controllers/worldController');
var CityController = require('./controllers/cityController');


module.exports = [
    {
        method: 'GET',
        path: '/',
        handler: IndexController.get
    },
    {
        method: 'GET',
        path: '/account',
        handler: AccountController.get
    },
    {
        method: 'PUT',
        path: '/account',
        handler: AccountController.put
    },
    {
        method: 'POST',
        path: '/account',
        handler: AccountController.post
    },
    {
        method: 'POST',
        path: '/login',
        handler: LoginController.validate
    },
    {
        method: 'GET',
        path: '/world',
        handler: WorldController.get
    },
    {
        method: 'GET',
        path: '/worldbyname',
        handler: WorldController.getbyname
    },
    {
        method: 'GET',
        path: '/worlds',
        handler: WorldController.getall
    },
    {
        method: 'PUT',
        path: '/world',
        handler: WorldController.put
    },
    {
        method: 'POST',
        path: '/world',
        handler: WorldController.post
    },
    {
        method: 'GET',
        path: '/city',
        handler: CityController.get
    },
    {
        method: 'GET',
        path: '/citybyusername',
        handler: CityController.getbyusername
    },
    {
        method: 'GET',
        path: '/citybyworld',
        handler: CityController.getbyworld
    },
    {
        method: 'PUT',
        path: '/city',
        handler: CityController.put
    },
    {
        method: 'POST',
        path: '/city',
        handler: CityController.post
    },
    {
        method: 'GET',
        path: '/player',
        handler: PlayerController.get
    },
    {
        method: 'GET',
        path: '/players',
        handler: PlayerController.getall
    },
    {
        method: 'PUT',
        path: '/player',
        handler: PlayerController.put
    },
    {
        method: 'POST',
        path: '/player',
        handler: PlayerController.post
    }

]

