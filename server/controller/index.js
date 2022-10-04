var models = require('../model/index.js');

module.exports = {
  getUser: function(req, res) {
    return models.findUser()
    .then((data) => res.send(data))
    .catch((err) => console.log(err))
  },

  insertUser: function(req, res) {
    return models.insertUser(req.body.params)
    .then(() => res.sendStatus(201).end())
    .catch((err) => console.log(err))
  },

  getVideo: function(req, res) {
    return models.findVideos()
    .then((data) => res.send(data))
    .catch((err) => console.log(err))
  },

  insertVideo: function(req, res) {
    return models.insertVideo(req.body.params)
    .then(() => res.sendStatus(201).end())
    .catch((err) => console.log(err))
  },

  getBlog: function(req, res) {
    return models.findBlog()
    .then((data) => res.send(data))
    .catch((err) => console.log(err))
  },

  insertBlog: function(req, res) {
    return models.insertBlog(req.body.params)
    .then(() => res.sendStatus(201).end())
    .catch((err) => console.log(err))
  }

};