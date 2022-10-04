var db = require('../db/db.js');

module.exports = {
  updateFavorite: ( currentUser, user ) => {
    return db.UserData.findOneAndUpdate({ username: currentUser.username }, { $push: { favCreator: user.username } })
  },
  unFavorite: (currentUser, user ) => {
    return db.UserData.findOneAndUpdate({ username: currentUser.username }, { $pull: { favCreator: user.username } })
  },

  findVideosByUser: (username) => {
    return db.VideoData.find({ username: username })
  },

  findBlogsByUser: (username) => {
    return db.BlogData.find({ username: username })
  },

  findSpecUser: (username) => {
    return db.UserData.findOne({ username: username })
  },

  updateBio: (username, bio) => {
    return db.UserData.findOneAndUpdate({ username: username }, { $set: { aboutMe: bio }})
  }
}