var express = require('express');
var router = express.Router();
var postsModel = require('../../models/postsModel');

router.get('/', async function (req, res, next) {
    var posts = await postsModel.getPosts();
    res.render('admin/posts', {
        layout: 'admin/layout',
        usuario: req.session.nombre,
        posts
    });
});

router.get('/agregar', (req, res, next) =>{
    res.render('admin/agregar', {
        layout: 'admin/layout'
    });
});

module.exports = router;

