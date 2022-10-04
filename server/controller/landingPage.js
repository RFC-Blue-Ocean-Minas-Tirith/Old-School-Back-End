var models = require('../model/landingPage.js');

module.exports = {
  getVideoInsightful: function (req, res) {
    console.log('getting insightful videos...')
    return models.findVideosInsightful()
      .then((data) => {
        //console.log(data);
        res.send(data)
      })
      .catch((err) => console.log(err))
  },
  getVideoFunny: function (req, res) {
    console.log('getting funny videos...')
    return models.findVideosFunny()
      .then((data) => {
        //console.log(data);
        res.send(data)
      })
      .catch((err) => console.log(err))
  },
  getVideoInformative: function (req, res) {
    console.log('getting informative videos...')
    return models.findVideosInformative()
      .then((data) => {
        //console.log(data);
        res.send(data)
      })
      .catch((err) => console.log(err))
  },
  getVideoRecent: function (req, res) {
    console.log('getting recent videos...')
    return models.findVideosRecent()
      .then((data) => {
       //console.log(data);
        res.send(data)
      })
      .catch((err) => console.log(err))
  },
  getVideoFavorited: function (req, res) {
    console.log('getting favorited videos...')
    return models.findVideosFavorited()
      .then((data) => {
        //console.log(data);
        res.send(data)
      })
      .catch((err) => console.log(err))
  },

  updateInsightful: function (req,res) {
    return models.updateInsightful(req.body)
    .then((data) => {
      //console.log(data);
      res.send(data)
    })
    .catch((err) => console.log(err))
  },

  updateFunny: function (req,res) {
    console.log(req.body);
    return models.updateFunny(req.body)
    .then((data) => {
      //console.log(data);
      res.send(data)
    })
    .catch((err) => console.log(err))
  },

  updateInformative: function (req,res) {
    return models.updateInformative(req.body)
    .then((data) => {
      //console.log(data);
      res.send(data)
    })
    .catch((err) => console.log(err))
  },
  updateUnInsightful: function (req,res) {
    return models.updateUnInsightful(req.body)
    .then((data) => {
      //console.log(data);
      res.send(data)
    })
    .catch((err) => console.log(err))
  },

  updateUnFunny: function (req,res) {
    console.log(req.body);
    return models.updateUnFunny(req.body)
    .then((data) => {
      //console.log(data);
      res.send(data)
    })
    .catch((err) => console.log(err))
  },

  updateUnInformative: function (req,res) {
    return models.updateUnInformative(req.body)
    .then((data) => {
      //console.log(data);
      res.send(data)
    })
    .catch((err) => console.log(err))
  },

    favoriteUser: function( req, res ) {
      //console.log('req.body in the controller favUser', req.body);
      return models.updateFavorite( req.body.currentUser, req.body.user )
      .then(() => res.status(200).send())
      .catch((err) => res.send(err));
    },

    unfavoriteUser: function( req, res ) {
      //console.log('req.body in the controller UNfavUser', req.body);
      return models.unFavorite( req.body.currentUser, req.body.user )
      .then(() => res.status(200).send())
      .catch((err) => res.send(err));
    },

}


