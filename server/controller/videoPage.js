var models = require('../model/videoPage.js');

module.exports = {
  vote: function(req, res)  {
    return models.vote(req.body)
      .then((res) => {
        res.status(201).send();
      })
      .catch((err) => {
        res.status(500).send(err)
      })
  },
  report: function(req, res) {
    return models.report(req.body)
      .then((res) => {
        res.status(201).send();
      })
      .catch((err) => {
        res.status(500).send(err)
      })
  },
  getFavs: function(req, res) {
    return models.getFavs(req.query)
    .then((result) => {
      res.status(200).send(result.favCreator);
    })
    .then((err) => {
      res.status(500).send(err);
    })
  }
}
