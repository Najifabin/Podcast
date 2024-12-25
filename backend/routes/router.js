const express = require('express')
const userController = require('../controllers/userController')
const podcastController = require('../controllers/podcastController')
const jwtMiddleware = require('../middlewares/jwtMiddleware')
const multerMiddleware = require('../middlewares/multerMiddleware')

const router = new express.Router()
// register - post
router.post('/register',userController.registerController)

// login
router.post('/login',userController.loginController)
console.log(multerMiddleware);

// add-podcast
router.post('/add-podcast',jwtMiddleware,multerMiddleware.single("podcastImg") ,podcastController.createPodcastController)

module.exports = router