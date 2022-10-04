var db = require('../db/db.js');

module.exports = {
  updateFavorite: ( currentUser, user ) => {
    console.log(currentUser, user);
    return db.UserData.findOneAndUpdate({ username: currentUser.username }, { $push: { favCreator: user/*  user.username*/ } })
  },
  unFavorite: (currentUser, user ) => {
    return db.UserData.findOneAndUpdate({ username: currentUser.username }, { $pull: { favCreator: user } })
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