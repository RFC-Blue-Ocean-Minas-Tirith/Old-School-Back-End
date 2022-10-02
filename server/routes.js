var controller = require('./controller/index');
var router = require('express').Router();


router.get('/user', controller.getUser);
router.post('/user', controller.insertUser);

router.get('/video', controller.getVideo);
router.post('/video', controller.insertVideo);

router.get('/blog', controller.getBlog);
router.post('/blog', controller.insertBlog);

module.exports = router;