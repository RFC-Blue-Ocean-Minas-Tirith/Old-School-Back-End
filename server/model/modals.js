var db = require('../db/db.js');

module.exports = {
  insertComment: (commentObj) => {
    return db.VideoData.updateOne( { url: commentObj.url },
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