var db = require('../db/db.js');

module.exports = {
  upsertUser: (user) => {
    const filter = { uid: user.uid };
    const update = user ;
    return db.UserData.findOneAndUpdate(filter, update, {
      new: true,
      upsert: true
    })
  },

  findVideos: (query) => {
    return db.VideoData.find({$or:
      [
        {title:{$regex: `${query}`, $options:'i'}},
        {keywords:{$regex: `${query}`, $options:'i'}},
        {description:{$regex: `${query}`, $options:'i'}},
        {username:{$regex: `${query}`, $options:'i'}}
      ]
    })
  }
}