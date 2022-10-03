const models = require('../model/profilePage.js');

module.exports = {
  favoriteUser: function( req, res ) {
    return models.updateFavorite( req.body.currentUser, req.body.user )
    .then(() => res.status(200).send())
    .catch((err) => res.send(err));
  },

  unfavoriteUser: function( req, res ) {
    return models.unFavorite( req.body.currentUser, req.body.user )
    .then(() => res.status(200).send())
    .catch((err) => res.send(err));
  },

  getVideosByUser: function( req, res ) {
    let username = req.url.slice(12, req.url.length)
    return models.findVideosByUser( username )
    .then((data) =>
      res.status(200).send(data))
    .catch((err) => res.send(err));
  },

  getBlogsByUser: function( req, res ) {
    let username = req.url.slice(11, req.url.length)
    return models.findBlogsByUser( username )
    .then((data) => res.status(200).send(data))
    .catch((err) => res.send(err));
  }
}