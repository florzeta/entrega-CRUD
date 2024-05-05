var express = require('express');
var router = express.Router();
var publicacionesModel = require('./../../models/publicacionesModel');

router.get('/', async function (req, res, next) {
    var publicaciones = await publicacionesModel.getPublicaciones();
    res.render('admin/publicaciones', {
        layout: 'admin/layout',
        usuario: req.session.nombre,
        publicaciones
    });
});

router.get('/agregar', (req, res, next) => {
    res.render('admin/agregar', {
        layout: 'admin/layout'
    });
});

router.post('/agregar', async (req, res, next) => {
    try {
        if (req.body.titulo != "" && req.body.subtitulo != "" && req.body.cuerpo != "") {
            await publicacionesModel.insertPublicacion(req.body);
            res.redirect('/admin/publicaciones')
        } else {
            res.render('admin/agregar', {
                layout: 'admin/layout',
                error: true, message: 'Todos los campos son requeridos'
            })
        }
    } catch (error) {
        console.log(error)
        res.render('admin/agregar', {
            layout: 'admin/layout',
            error: true, message: 'No se cargo la publicacion'
        });
    }
});

router.get('/eliminar/:id', async (req, res, next) => {
    const id = req.params.id;
    await publicacionesModel.deletePublicacionById(id);
    res.redirect('/admin/publicaciones');
});

router.get('/modificar/:id', async (req, res, next) => {
    let id = req.params.id;
    let publicacion = await publicacionesModel.getPublicacionById(id);
    res.render('admin/modificar', {
        layout: 'admin/layout',
        publicacion
    });
});

router.post('/modificar', async (req, res, next) => {
    try {
        var obj = {
            titulo: req.body.titulo,
            subtitulo: req.body.subtitulo,
            cuerpo: req.body.cuerpo
        }
        console.log(obj)

        await publicacionesModel.modificarPublicacionById(obj, req.body.id);
        res.redirect('/admin/publicaciones');
    }
    catch (error) {
        console.log(error)
        res.render('admin/modificar', {
            layout: 'admin/layout',
            error: true,
            message: 'No se modifico la publicacion'
        })
    }
})


module.exports = router;