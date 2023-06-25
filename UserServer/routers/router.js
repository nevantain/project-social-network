const Router = require('express');
const postController = require('../controllers/postControllers/postController.js');
const userController = require('../controllers/userControllers/userController.js');

const router = new Router();

// POST ROUTES
router.get('/posts', postController.getPosts);
router.get('/post', postController.getPost);
router.post('/posts_of_user', postController.getPostsOfUser);
router.post('/create', postController.newPost);
router.delete('/delete', postController.deletePost);
router.put('/update', postController.updatePost);

// USER ROUTES
router.get('/users', userController.getUsers);
router.get('/user', userController.getUser);

module.exports = router;