var db = require('../db/db.js');

module.exports = {
  upsertUser: (user) => {
    const filter = { uid: user.uid };
    const update = user ;
    return db.UserData.findOneAndUpdate(filter, update, {
      new: true,
      upsert: true
    })
  }
}