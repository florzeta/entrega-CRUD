var express = require('express');
var router = express.Router();
var usersModel = require('./../../models/usersModel');

router.get('/', function (req, res, next) {
    res.render('admin/login', {
        layout: 'admin/layout'
    });
});

router.post('/', async (req, res, next) => {
    try {
        var usuario = req.body.usuario;
        var password = req.body.password;

        var data = await usersModel.getByUserNameAndPassword(usuario, password);

        if (data != undefined) {
            req.session.id_usuario = data.id;
            req.session.nombre = data.usuario;
            res.redirect('/admin/publicaciones');
        } else {
            res.render('admin/login', {
                layout: 'admin/layout',
                error: true
            });
        }
} catch (error) {
    console.log(error);
    }
});

module.exports = router;