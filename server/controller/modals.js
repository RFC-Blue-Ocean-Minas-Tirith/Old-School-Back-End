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
  removeFlagged: function(req, res) {
    return models.removeFlagged(req.body.params)
    .then(() => res.sendStatus(201).end())
    .catch((err) => console.log(err))
  },
  keepFlagged: function(req, res) {
    return models.keepFlagged(req.body.params)
    .then(() => res.sendStatus(201).end())
    .catch((err) => console.log(err))
  }
}