var models = require('../model/modals.js');

module.exports = {
  insertComment: function(req, res) {
    return models.insertComment(req.body.params)
    .then(() => res.sendStatus(201).end())
    .catch((err) => console.log(err))
  },
  getFlaggedComments: function(req, res) {
    return models.getFlaggedComments()
    .then((data) => res.send(data))
    .catch((err) => console.log(err))
  },
  // future implementation
  // editFlaggedComments: function(req, res) {
  //   return models.getFlaggedComments()
  //   .then(() => res.sendStatus(201).end())
  //   .catch((err) => console.log(err))
  // }
}