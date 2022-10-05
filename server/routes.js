var controller = require('./controller/index');
var profileController = require('./controller/profilePage.js')
var landingpage = require('./controller/landingPage');
var profileController = require('./controller/profilePage.js')
var videopage = require('./controller/videoPage.js');
var modals = require('./controller/modals');
var navbar = require('./controller/navbar.js');
var router = require('express').Router();


router.get('/user/favs', videopage.getFavs);
router.get('/user', controller.getUser);
router.get('/user/data', profileController.getSpecUser);
router.post('/user', navbar.upsertUserCntl);

router.put('/userprofile', profileController.favoriteUser);
router.put('/userprofilex', profileController.unfavoriteUser);

router.get('/video', controller.getVideo);
router.get('/video/user/:username', profileController.getVideosByUser);
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
// router.put('/userprofile', landingpage.favoriteUser);
// router.put('/userprofilex', landingpage.unfavoriteUser);
router.put('/video/vote', videopage.vote)
router.put('/video/report', videopage.report);

router.post('/video', controller.insertVideo);
router.patch('/video', modals.insertComment);

router.get('/blog', controller.getBlog);
router.get('/blog/user/:username', profileController.getBlogsByUser);
router.post('/blog', controller.insertBlog);

module.exports = router;