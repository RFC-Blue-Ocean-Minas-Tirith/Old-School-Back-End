var models = require('../model/landingPage.js');

module.exports = {
  getVideoInsightful: function (req, res) {
    console.log('getting insightful videos...')
    return models.findVideosInsightful()
      .then((data) => {
        console.log(data);
        res.send(data)
      })
      .catch((err) => console.log(err))
  },
  getVideoFunny: function (req, res) {
    console.log('getting funny videos...')
    return models.findVideosFunny()
      .then((data) => {
        console.log(data);
        res.send(data)
      })
      .catch((err) => console.log(err))
  },
  getVideoInformative: function (req, res) {
    console.log('getting informative videos...')
    return models.findVideosInformative()
      .then((data) => {
        console.log(data);
        res.send(data)
      })
      .catch((err) => console.log(err))
  },
  getVideoRecent: function (req, res) {
    console.log('getting recent videos...')
    return models.findVideosRecent()
      .then((data) => {
        console.log(data);
        res.send(data)
      })
      .catch((err) => console.log(err))
  },
  getVideoFavorited: function (req, res) {
    console.log('getting favorited videos...')
    return models.findVideosFavorited()
      .then((data) => {
        console.log(data);
        res.send(data)
      })
      .catch((err) => console.log(err))
  },
}


