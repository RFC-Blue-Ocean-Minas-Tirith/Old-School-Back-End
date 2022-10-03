var db = require('../db/db.js');

module.exports = {
  findVideosInsightful: () => {
    return db.VideoData.find({}).sort({ 'votes.insightful.count': - 1 })
      .then((res) => { return res })
      .catch((err) => console.log(err))
  },

  findVideosFunny: () => {
    return db.VideoData.find({}).sort({ 'votes.funny.count': - 1 })
      .then((res) => { return res })
      .catch((err) => console.log(err))
  },

  findVideosInformative: () => {
    return db.VideoData.find({}).sort({ 'votes.informative.count': - 1 })
      .then((res) => { return res })
      .catch((err) => console.log(err))
  },

  findVideosRecent: () => {
    return db.VideoData.find({}).sort({ 'dateUploaded': - 1 })
      .then((res) => { return res })
      .catch((err) => console.log(err))
  },

  findVideosFavorited: () => {
    return db.UserData.aggregate([
      {
        $lookup:
        {
          from: 'videodatas',
          localField: 'username',
          foreignField: 'username',
          as: 'videos'
        }
      }
    ]).sort({ 'favoritedCount': - 1 })
      .then((res) => { return res })
      .catch((err) => console.log(err))
  },

}