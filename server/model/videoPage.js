var db = require('../db/db.js');

module.exports = {
  vote: ({ vote, videoID, username }) => {
    return db.VideoData.findOneAndUpdate({ objectID: videoID },
      {
        $push: {
          [`votes.${vote}.usernames`]: username
        }
      })
  }
}