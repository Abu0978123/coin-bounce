const express = require('express');
const authController = require('../controller/index')
const router = express.Router();

// user

// register
router.post('/register', authController.register);

// login
router.post('/login', authController.login);
 
// logout
// router.post('/logout', authController.logout)

// refresh
// router.get('/refresh', authController.refresh);

// blog

// create
// router.post('/blog', blogController.create);

// get all
// router.get('/blog/all', blogController.getAll);

// get blog by id
// router.get('/blog/:id', blogController.getById);

// update
// router.put('/blog', blogController.update);

// delete
// router.delete('/blog/:id', blogController.delete);

// comment
// create 
// router.post('/comment', commentController.create);

// get 
// router.get('/comment/:id', commentController.getById);

module.exports = router;