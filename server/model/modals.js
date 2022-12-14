var db = require('../db/db.js');
var ObjectId = require('mongodb').ObjectID;

module.exports = {
  insertComment: (commentObj) => {
    return db.VideoData.updateOne( { _id: ObjectId(commentObj.id) },
      { $push : {
        comments: {
          author: commentObj.username,
          comment: commentObj.comment,
          date: commentObj.date,
        }
      }
    }
    )
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
  },
  getFlaggedComments: () => {
    return db.VideoData.find( { comments: { $elemMatch:{ isReported : true} } }, { _id:1, title: 1, comments:1 } )
    .then((res) => {
      return res
    })
    .catch((err) => console.log(err))
  },
  removeFlagged: (commentObj) => {
    return db.VideoData.updateOne( { _id: ObjectId(commentObj.id) },
      { $pull : {
        'comments': {
          comment: commentObj.comment,
        }
      }
    }
    )
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
  },
  keepFlagged: (commentObj) => {
  return db.VideoData.updateOne({ _id: ObjectId(commentObj.id) }, {
    $set: {
      "comments.$[comment].isReported": false
    }
    },
    {
      arrayFilters: [{ "comment._id": ObjectId(commentObj.commentID) }]
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
  },
  getFlaggedVideos: () => {
    return db.VideoData.find( { reported: true }, { _id:1, title: 1, username:1 } )
    .then((res) => {
      console.log(res);
      return res
    })
    .catch((err) => console.log(err))
  },
  removeFlaggedVideos: (commentObj) => {
    return db.VideoData.deleteOne( { _id: ObjectId(commentObj.id) })
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
  },
  keepFlaggedVideos: (commentObj) => {
  return db.VideoData.updateOne({ _id: ObjectId(commentObj.id) }, { reported: false })
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
  }
}