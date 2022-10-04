var controller = require('./controller/index');
var landingpage = require('./controller/landingPage');
var profileController = require('./controller/profilePage.js')
var router = require('express').Router();


router.get('/user', controller.getUser);
router.post('/user', controller.insertUser);

router.get('/video', controller.getVideo);
router.get('/video/insightful', landingpage.getVideoInsightful);
router.get('/video/funny', landingpage.getVideoFunny);
router.get('/video/informative', landingpage.getVideoInformative);
router.get('/video/recent', landingpage.getVideoRecent);
router.get('/video/favorited', landingpage.getVideoFavorited);
router.put('/video/insightful', landingpage.updateInsightful);
router.put('/video/insightfulx', landingpage.updateUnInsightful);
router.put('/video/funny', landingpage.updateFunny);
router.put('/video/funnyx', landingpage.updateUnFunny);
router.put('/video/informative', landingpage.updateInformative);
router.put('/video/informativex', landingpage.updateUnInformative);
router.put('/userprofile', landingpage.favoriteUser);
router.put('/userprofilex', landingpage.unfavoriteUser);

router.post('/video', controller.insertVideo);

router.get('/blog', controller.getBlog);
router.post('/blog', controller.insertBlog);

module.exports = router;