var models = require('../model/navbar.js');

module.exports = {
  upsertUserCntl: (req, res) => {
    return models.upsertUser(req.body)
    .then((response) => {
      res.sendStatus(201)
    })
    .catch((err) => {
      console.log(err)
    })
  },

  getVideos: (req, res) => {
    return models.findVideos(req.query.searchTerm)
    .then((response) => {
      res.status(200).send(response)
    })
    .catch((err) => {
      console.log(err)
    })
  }
}