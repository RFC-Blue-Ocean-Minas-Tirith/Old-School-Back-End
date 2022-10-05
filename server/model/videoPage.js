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
  report: ({ id, type, commentID }) => {
    console.log(id, type, commentID);
    if (type === 'comment') {
      return db.VideoData.updateOne({ _id: ObjectId(id) }, {
        $set: {
          "comments.$[comment].isReported": true
        }
      },
        {
          arrayFilters: [{ "comment._id": ObjectId(commentID) }]
        })
    } else {
      return db.VideoData.updateOne({ _id: ObjectId(id) },
        {
          $set: {
            reported: true
          }
        })
    }
  },
  getFavs: ({ user }) => {
    return db.UserData.findOne({ username: user });
  }
}