module.exports = (app) =>{
    const tacos = require('../controllers/taco.controller.js');

    app.get('/tacos', tacos.findAll);
    app.post('/tacos', tacos.create);
}