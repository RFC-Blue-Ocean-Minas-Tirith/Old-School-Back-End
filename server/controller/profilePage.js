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
    username = unescape(username);
    return models.findVideosByUser( username )
    .then((data) =>
      res.status(200).send(data))
    .catch((err) => res.send(err));
  },

  getBlogsByUser: function( req, res ) {
    let username = req.url.slice(11, req.url.length)
    username = unescape(username);
    return models.findBlogsByUser( username )
    .then((data) => res.status(200).send(data))
    .catch((err) => res.send(err));
  },

  getSpecUser: function (req, res) {
    let username = req.query.user;
    return models.findSpecUser( username )
    .then((data) => { console.log(data); res.status(200).send(data)})
    .catch((err) => res.send(err));
  },

  updateBio: function( req, res ) {
    let username = req.body.user
    let bio = req.body.bio
    return models.updateBio(username, bio)
    .then((data) => { res.status(200).send(data)})
    .catch((err) => res.send(err))
  }
}