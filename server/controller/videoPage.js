var models = require('../model/videoPage.js');

module.exports = {
  vote: function(req, res)  {
    console.log(req.body);
    return models.vote(req.body);
  },
}