var models = require('../model/videoPage.js');

module.exports = {
  vote: function(req, res)  {
    console.log(req.body);
    return models.vote(req.body)
      .then((res) => {
        res.status(201).send();
      })
      .catch((err) => {
        res.status(500).send(err)
      })
  },
}