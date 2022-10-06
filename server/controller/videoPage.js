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
      .then((result) => {
        res.status(201).send();
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send(err)
      })
  },
  getFavs: function(req, res) {
    return models.getFavs(req.query)
    .then((result) => {
      if (result !== null) {
        res.status(200).send(result.favCreator);
      } else {
        res.status(200).send([]);
      }
    })
    .then((err) => {
      res.status(500).send(err);
    })
  }
}
