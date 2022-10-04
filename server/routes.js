var controller = require('./controller/index');
var landingpage = require('./controller/landingPage');
var modals = require('./controller/modals');
var router = require('express').Router();


router.get('/user', controller.getUser);
router.post('/user', controller.insertUser);

router.get('/video', controller.getVideo);
router.get('/video/insightful', landingpage.getVideoInsightful);
router.get('/video/funny', landingpage.getVideoFunny);
router.get('/video/informative', landingpage.getVideoInformative);
router.get('/video/recent', landingpage.getVideoRecent);
router.get('/video/favorited', landingpage.getVideoFavorited);

router.post('/video', controller.insertVideo);
router.patch('/video', modals.insertComment);

router.get('/blog', controller.getBlog);
router.post('/blog', controller.insertBlog);

router.get('/flaggedComments', modals.getFlaggedComments);

module.exports = router;