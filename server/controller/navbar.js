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
  }
}