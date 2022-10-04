var db = require('../db/db.js');
var ObjectId = require('mongodb').ObjectID;

module.exports = {
  vote: ({ vote, videoID, username }) => {
    return db.VideoData.findOneAndUpdate({ _id: ObjectId(videoID) },
      {
        $push: {
          [`votes.${vote}.usernames`]: username
        }
      })
  },
  report: ({ id, type }) => {
    if (type === 'comment') {
      return db.VideoData.findOneAndUpdate({ _id: ObjectId(id) },
        {
          $set: {
            [`comments[${id}].reported`]: true
          }
        })
    } else {
      return db.VideoData.findOneAndUPdate({ _id: (id) },
        {
          $set: {
            reported: true
          }
        })
    }
  }
}