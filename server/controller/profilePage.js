const models = require('../model/profilePage.js');

module.exports = {
  favoriteUser: function( req, res ) {
    return models.updateFavorite( req.body.currentUser, req.body.user )
    .then(() => res.send())
    .catch((err) => res.send(err));
  },

  unfavoriteUser: function( req, res ) {
    return models.unFavorite( req.body.currentUser, req.body.user )
    .then(() => res.send())
    .catch((err) => res.send(err));
  }
}