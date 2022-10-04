var db = require('../db/db.js');

module.exports = {
  findVideosInsightful: () => {
    //return db.VideoData.find({}).sort({ 'votes.insightful.count': - 1 })
    return db.VideoData.aggregate([
      {
        $addFields: {
          ct: {
            $size: "$votes.insightful.usernames"
          }
        }
      },
      {
        $sort: {
          ct: -1
        }
      }
    ])
      .then((res) => { return res })
      .catch((err) => console.log(err))
  },

  findVideosFunny: () => {
    //return db.VideoData.find({}).sort({ 'votes.funny.count': - 1 })
    return db.VideoData.aggregate([
      {
        $addFields: {
          ct: {
            $size: "$votes.funny.usernames"
          }
        }
      },
      {
        $sort: {
          ct: -1
        }
      }
    ])
      .then((res) => { return res })
      .catch((err) => console.log(err))
  },

  findVideosInformative: () => {
    //return db.VideoData.find({}).sort({ 'votes.informative.count': - 1 })
    return db.VideoData.aggregate([
      {
        $addFields: {
          ct: {
            $size: "$votes.informative.usernames"
          }
        }
      },
      {
        $sort: {
          ct: -1
        }
      }
    ])
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
  updateInsightful: (params) => {
    //console.log('these are the params at the model', params);
    return db.VideoData.findOneAndUpdate({ username: params.username }, { $push: { ['votes.insightful.usernames']: params.currentUser } })
      .then(() => console.log('updated...'))
      .catch((err) => console.log(err));
  },
  updateUnInsightful: (params) => {
    //console.log('these are the params at the model', params);
    return db.VideoData.findOneAndUpdate({ username: params.username }, { $pull: { ['votes.insightful.usernames']: params.currentUser } })
      .then(() => console.log('updated...'))
      .catch((err) => console.log(err));
  },

  updateFunny: (params) => {
    //console.log('these are the params at the model', params);
    return db.VideoData.findOneAndUpdate({ username: params.username }, { $push: { ['votes.funny.usernames']: params.currentUser } })
      .then(() => console.log('updated...'))
      .catch((err) => console.log(err));
  },
  updateUnFunny: (params) => {
   //console.log('these are the params at the model', params);
    return db.VideoData.findOneAndUpdate({ username: params.username }, { $pull: { ['votes.funny.usernames']: params.currentUser } })
      .then(() => console.log('updated...'))
      .catch((err) => console.log(err));
  },

  updateInformative: (params) => {
    //console.log('these are the params at the model', params);
    return db.VideoData.findOneAndUpdate({ username: params.username }, { $push: { ['votes.informative.usernames']: params.currentUser } })
      .then(() => console.log('updated...'))
      .catch((err) => console.log(err));
  },
  updateUnInformative: (params) => {
    //console.log('these are the params at the model', params);
    return db.VideoData.findOneAndUpdate({ username: params.username }, { $pull: { ['votes.informative.usernames']: params.currentUser } })
      .then(() => console.log('updated...'))
      .catch((err) => console.log(err));
  },
  updateFavorite: ( currentUser, user ) => {
    return db.UserData.findOneAndUpdate({ username: currentUser}, { $push: { favCreator: user} })
  },
  unFavorite: (currentUser, user ) => {
    return db.UserData.findOneAndUpdate({ username: currentUser }, { $pull: { favCreator: user} })
  },

}