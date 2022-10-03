var controller = require('./controller/index');
var profileController = require('./controller/profilePage.js')
var router = require('express').Router();


router.get('/user', controller.getUser);
router.post('/user', controller.insertUser);

router.put('/userprofile', profileController.favoriteUser);
router.put('/userprofilex', profileController.unfavoriteUser);

router.get('/video', controller.getVideo);
router.get('/video/user/:username', profileController.getVideosByUser);
router.post('/video', controller.insertVideo);

router.get('/blog', controller.getBlog);
router.get('/blog/user/:username', profileController.getBlogsByUser);
router.post('/blog', controller.insertBlog);

module.exports = router;