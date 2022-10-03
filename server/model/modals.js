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
}