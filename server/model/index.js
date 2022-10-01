var db = require('../db/db.js');


module.exports = {
  insertUser: (userObj) => {
    return db.UserData.create(userObj)
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
  },

  insertVideo: (videoObj) => {
    return db.VideoData.create(videoObj)
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
  },

  insertBlog: (blogObj) => {
    return db.BlogData.create(blogObj)
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
  },

  findUser: () => {
    return db.UserData.find({})
    .then((res) => {return res})
    .catch((err) => console.log(err))
  },

  findVideos: () => {
    return db.VideoData.find({})
    .then((res) => {return res})
    .catch((err) => console.log(err))
  },

  findBlog: () => {
    return db.BlogData.find({})
    .then((res) => {return res})
    .catch((err) => console.log(err))
  },
}