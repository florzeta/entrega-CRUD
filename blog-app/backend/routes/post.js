const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

router.get('/', postController.getAllPost);
router.post('/', postController.createPost);
router.get('/:id', postController.getPostById);
router.put('/:id', articleController.updatePost);
router.delete('/:id', articleController.deletePost);

module.exports = router;