var controller = require('./controller/index');
var profileController = require('./controller/profilePage.js')
var landingpage = require('./controller/landingPage');
var modals = require('./controller/modals');
var videopage = require('./controller/videoPage.js');
var router = require('express').Router();


router.get('/user', controller.getUser);
router.post('/user', controller.insertUser);

router.put('/userprofile', profileController.favoriteUser);
router.put('/userprofilex', profileController.unfavoriteUser);

router.get('/video', controller.getVideo);
router.get('/video/user/:username', profileController.getVideosByUser);
router.get('/video/insightful', landingpage.getVideoInsightful);
router.get('/video/funny', landingpage.getVideoFunny);
router.get('/video/informative', landingpage.getVideoInformative);
router.get('/video/recent', landingpage.getVideoRecent);
router.get('/video/favorited', landingpage.getVideoFavorited);
router.put('/video/vote', videopage.vote)

router.post('/video', controller.insertVideo);
router.patch('/video', modals.insertComment);

router.get('/blog', controller.getBlog);
router.get('/blog/user/:username', profileController.getBlogsByUser);
router.post('/blog', controller.insertBlog);

module.exports = router;