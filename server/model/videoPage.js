var db = require('../db/db.js');

module.exports = {
  vote: ({ vote, videoID, username }) => {
    console.log(vote, typeof videoID);
    return db.VideoData.findOneAndUpdate({ _id: (videoID) },
      {
        $push: {
          [`votes.${vote}.usernames`]: username
        }
      })
  },
  report: ({ id, type }) => {
    if (type === 'comment') {
      return db.VideoData.findOneAndUpdate({ _id: (id) },
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